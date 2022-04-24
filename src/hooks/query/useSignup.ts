import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { signUpReq } from "../../api/auth";
import { userTokenAtom } from "../../store/authStore";
import { showErrorModalAtom } from "../../store/UtilStore";

interface Query{
    refetch:any
    error:any
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

    const { error, refetch }:Query = useQuery(
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
                setshowErrorModal(true);
            },
            onSettled: (data) => {
                setToken(data?.data?.token);
            },
        }
    );

    const onSubmitHandler = () => {
        refetch();
    };
    return {error,onSubmitHandler}
};
export default useSignup;