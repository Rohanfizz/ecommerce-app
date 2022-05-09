import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ActionsMain from "./ActionsMain";
import OrderAndProductsInfo from "./OrderAndProductsInfo";
import SummaryMain from "./SummaryMain";

const DashboardMain = () => {
    return (
        <Grid
            h="calc( 100vh - 4.5rem - 6rem)"
            w="100%"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
            p="1"
        >
            <GridItem rowSpan={10} colSpan={6} >
                <OrderAndProductsInfo />
            </GridItem>
            <GridItem rowSpan={5} colSpan={4} bg="papayawhip">
                <SummaryMain />
            </GridItem>
            <GridItem rowSpan={5} colSpan={4} bg="papayawhip">
                <ActionsMain />
            </GridItem>
        </Grid>
    );
};

export default DashboardMain;
