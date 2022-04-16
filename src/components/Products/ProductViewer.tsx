import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import FilterSortBar from "./SortBox";
import ProductList from "./ProductList";
import SortBox from "./SortBox";
import FilterBox from "./FilterBox/FilterBox";

function ProductViewer() {
    return (
        <Grid
            // h="100vh"
            templateRows="repeat(20, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={2}
            paddingTop="1rem"
            paddingBottom="1rem"
            autoRows="unset"
        >
            <GridItem  rowSpan={20} colSpan={1} height="auto">
                <FilterBox />
            </GridItem>
            <GridItem rowSpan={1} colSpan={4}>
                <SortBox />
            </GridItem>
            <GridItem rowSpan={20}  colSpan={4} >
                <ProductList />
            </GridItem>
        </Grid>
    );
}

export default ProductViewer;
