import { Flex } from "@chakra-ui/react";
import React from "react";
import DownloadInvoice from "../../../src/components/Checkout/PlacedStatus/DownloadInvoice";
import PlacedSuccess from "../../../src/components/Checkout/PlacedStatus/PlacedSuccess";

const OrderSuccess = () => {
    return (
        <Flex flexDir={"column"} alignItems="center">
            <PlacedSuccess />
            <DownloadInvoice />
        </Flex>
    );
};

export default OrderSuccess;
