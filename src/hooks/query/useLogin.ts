import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { loginReq } from "../../api/auth";
import { userTokenAtom } from "../../store/authStore";
import {
    showErrorModalAtom,
    showSuccessModalAtom,
} from "../../store/UtilStore";

interface Query {
    refetch: any;
    error: any;
    isSuccess: boolean;
}

const useLogin = (email: string, password: string) => {
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [showSuccessModal, setshowSuccessModal] =
        useRecoilState(showSuccessModalAtom);
    const [token, setToken] = useRecoilState(userTokenAtom);

    const { error, refetch, isSuccess }: Query = useQuery(
        "log-in",
        () => loginReq(email, password),
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
    const errorString =
        error?.response?.status === 401
            ? "Invalid Email or Password"
            : "There Was A problem Loging In...";
    const correctString = isSuccess ? "Login Successful!" : "Login Failed";

    return { errorString, correctString, onSubmitHandler };
};
export default useLogin;
