import axios from "axios";
import localforage from "localforage";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { loginReq } from "../../api/auth";
import { userTokenAtom, userUUIDAtom } from "../../store/authStore";
import { fetchingCartAtom } from "../../store/CartStore";
import {
    errorTextAtom,
    showErrorModalAtom,
    showSuccessModalAtom,
} from "../../store/UtilStore";

interface Query {
    refetch: any;
    error: any;
    isSuccess: boolean;
}

const useLogin = (email: string, password: string) => {
    const [fetchingCart, setfetchingCart] = useRecoilState(fetchingCartAtom);
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [showSuccessModal, setshowSuccessModal] =
        useRecoilState(showSuccessModalAtom);
    const [token, setToken] = useRecoilState(userTokenAtom);
    const [userUUID, setuserUUID] = useRecoilState(userUUIDAtom);
    const [errorText, setErrorText] = useRecoilState(errorTextAtom);

    const { error, refetch, isSuccess }: Query = useQuery(
        "log-in",
        () => loginReq(email, password),
        {
            enabled: false,
            retry: 0,
            onError: () => {
                const errorString =
                    error?.response?.status === 401
                        ? "Invalid Email or Password"
                        : "There Was A problem Loging In...";
                setErrorText(errorString);
                setshowErrorModal(true);
            },
            onSettled: async (data) => {
                setToken(data?.data?.token);
                await localforage.setItem("userToken", data?.data?.token);
                setuserUUID(data?.data?.data?.uuid);
                setfetchingCart(true);
            },
        }
    );

    const onSubmitHandler = () => {
        refetch();
    };

    const correctString = isSuccess ? "Login Successful!" : "Login Failed";

    return { correctString, onSubmitHandler };
};
export default useLogin;
