import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { loginReq } from "../../api/auth";
import { userTokenAtom, userUUIDAtom } from "../../store/authStore";
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
            onSettled: (data) => {
                setToken(data?.data?.token);
                setuserUUID(data?.data?.data?.uuid);
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
