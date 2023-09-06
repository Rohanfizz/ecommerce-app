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
    
    return (
        <ProtectedRoutes>
            <CheckoutMain />
         </ProtectedRoutes>
    );
};

export default CheckoutPage;
