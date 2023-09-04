import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import CheckoutMain from "../../src/components/Checkout/CheckoutMain";
import ProtectedRoutes from "../../src/components/Util/ProtectedRoutes";
import { useRecoilValue } from "recoil";
import { userTokenAtom } from "../../src/store/authStore";
import { useRouter } from "next/router";
import { errorTextAtom, showErrorModalAtom } from "../../src/store/UtilStore";
import { setRecoil } from "recoil-nexus";

const CheckoutPage: NextPage = () => {
    const router = useRouter();
    const isLoggedin = useRecoilValue(userTokenAtom);
    React.useEffect(()=>{
        //If user tries to get to this page without logging in
        setRecoil(
            errorTextAtom,
            "You need to be logged in!"
        );
        setRecoil(showErrorModalAtom, true);
        if(!isLoggedin) router.push('/');
    },[])
    
    return (
        // <ProtectedRoutes>
            <CheckoutMain />
        // </ProtectedRoutes>
    );
};

export default CheckoutPage;
