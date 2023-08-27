import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import CheckoutMain from "../../src/components/Checkout/CheckoutMain";
import ProtectedRoutes from "../../src/components/Util/ProtectedRoutes";

const CheckoutPage: NextPage = () => {
    return (
        // <ProtectedRoutes>
            <CheckoutMain />
        // </ProtectedRoutes>
    );
};

export default CheckoutPage;
