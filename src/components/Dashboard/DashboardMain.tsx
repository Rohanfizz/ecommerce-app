import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ActionsMain from "./ActionsMain";
import OrderAndProductsInfo from "./OrderAndProductsInfo";
import SummaryMain from "./SummaryMain";

export const cardCss = {
    // borderRadius: "0.5rem",
    boxShadow: "xl",
    p: "1.5",
    rounded: "md",
    bg: "white",
};

const DashboardMain = () => {
    return (
        <Grid
            h="calc( 100vh - 4.5rem - 6rem)"
            w="100%"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
        >
            <GridItem rowSpan={10} colSpan={6} sx={cardCss}>
                <OrderAndProductsInfo />
            </GridItem>
            <GridItem rowSpan={5} colSpan={4} sx={cardCss}>
                <SummaryMain />
            </GridItem>
            <GridItem rowSpan={5} colSpan={4} sx={cardCss}>
                <ActionsMain />
            </GridItem>
        </Grid>
    );
};

export default DashboardMain;
