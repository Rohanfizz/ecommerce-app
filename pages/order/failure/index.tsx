import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import OutOfStockList from "../../../src/components/Checkout/PlacedStatus/OutOfStockList";
import PlacedFail from "../../../src/components/Checkout/PlacedStatus/PlacedFail";

const PalcedResult = () => {
    return (
        <>
        <Flex flexDir={'column'} alignItems='center'>
            <PlacedFail />
            <OutOfStockList/>
            </Flex>
        </>
    );
};

export default PalcedResult;
