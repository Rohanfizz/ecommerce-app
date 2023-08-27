import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { setRecoil } from "recoil-nexus";
import { loginReq } from "../../api/auth";
import { isPrivilagedAtom, userTokenAtom } from "../../store/authStore";
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
    const [isPrivilaged, setisPrivilaged] = useRecoilState(isPrivilagedAtom);
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
                if (typeof window !== undefined) {
                    localStorage.setItem(
                        "userToken",
                        JSON.stringify(data?.data?.token)
                    ); //gpt
                }
                setisPrivilaged(data?.data?.data?.user?.role != "user");
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
