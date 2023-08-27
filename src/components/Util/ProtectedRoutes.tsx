import { useRouter } from "next/router";
import React, { Children, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";
import { isLoggedInSelector, isPrivilagedAtom } from "../../store/authStore";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";
const isBrowser = () => typeof window !== undefined;

const ProtectedRoutes = ({ children }) => {
    const router = useRouter();

    const protectedRoutes = ["/dashboard"];

    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    const isPrivilaged = useRecoilValue(isPrivilagedAtom);
    useEffect(() => {
        let pathIsProtected = protectedRoutes.indexOf(router.pathname) != -1;
        if (pathIsProtected && isBrowser() && isLoggedIn && isPrivilaged) {
            return children;
        } else {
            router.replace("/");
            setRecoil(
                errorTextAtom,
                "You are not authorized to view the contents of this page!"
            );
            setRecoil(showErrorModalAtom, true);
            return <></>;
        }
    }, []);
};

export default ProtectedRoutes;
