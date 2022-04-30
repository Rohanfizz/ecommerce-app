import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { signUpReq } from "../../api/auth";
import { createNewCart } from "../../api/cart";
import { userTokenAtom, userUUIDAtom } from "../../store/authStore";
import { cartAtom, subTotalCartAtom } from "../../store/CartStore";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";

interface Query {
    refetch: any;
    error: any;
}

const useSignup = (
    firstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    passwordValue: string,
    passwordRepeatValue: string
) => {
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [token, setToken] = useRecoilState(userTokenAtom);
    const [userUUID, setuserUUID] = useRecoilState(userUUIDAtom);
    const cart = useRecoilValue(cartAtom);
    const [errorText, setErrorText] = useRecoilState(errorTextAtom);
    const subtotal = useRecoilValue(subTotalCartAtom);
    const { error: createCartError, refetch: refetchCart }: Query = useQuery(
        "create-new-cart",  
        () => createNewCart(cart,subtotal),
        { enabled: false }
    );

    const { error, refetch }: Query = useQuery(
        "sign-up",
        () =>
            signUpReq(
                firstNameValue,
                lastNameValue,
                emailValue,
                passwordValue,
                passwordRepeatValue
            ),
        {
            enabled: false,
            retry: 0,
            onError: () => {
                const errorString = error?.response?.data?.error?.code === 11000
                ? "Account With Email Already Exists!"
                : "Please enter valid data";
                setErrorText(errorString);
                setshowErrorModal(true);
            },
            onSettled: (data) => {
                setToken(data?.data?.token);
                setuserUUID(data?.data?.data?.uuid);
                refetchCart();
            },
        }
    );

    const onSubmitHandler = () => {
        refetch();
    };
    return { error, onSubmitHandler };
};
export default useSignup;
