import { useRouter } from "next/router";
import React, { Children, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";
import { isLoggedInSelector, isPrivilagedAtom } from "../../store/authStore";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";
const isBrowser = () => typeof window !== undefined;

const ProtectedRoutes = ({ children }) => {
    const router = useRouter();

    const protectedRoutes = ["/dashboard"];

    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    const isPrivilaged = useRecoilValue(isPrivilagedAtom);

    const [errorText, setErrorText] = useRecoilState    (errorTextAtom);
    const [showErrorModal, setShowErrorModal] =
        useRecoilState(showErrorModalAtom);

    useEffect(() => {
        let pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;
        if (pathIsProtected && isBrowser() && isLoggedIn && isPrivilaged) {
            // No need to return anything here
        } else {
            router.replace("/");
            setErrorText(
                "You are not authorized to view the contents of this page!"
            );
            setShowErrorModal(true);
        }
    }, []);

    // Always render children outside of useEffect
    return <>{children}</>;
};

export default ProtectedRoutes;
