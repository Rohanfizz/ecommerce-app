import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AddressFormMain from "./AddressFormMain";
import BillMain from "./BillMain";
import PaymentMethodMain from "./PaymentMethodMain";

const CheckoutMain = () => {
    return (
        // <Box  display='flex'
        //  alignItems='center' justifyContent={'center'}
        //  w="60%"
        //  border='1px'
        // >
        <Flex justifyContent={"center"}>
            <Grid
                minH="45rem"
                w="60%"
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={3} colSpan={3}>
                    <AddressFormMain />
                </GridItem>
                <GridItem rowSpan={5} colSpan={2}>
                    <BillMain />
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <PaymentMethodMain />
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default CheckoutMain;
