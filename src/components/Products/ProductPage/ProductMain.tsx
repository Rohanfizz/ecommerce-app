import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import useProduct from "../../../hooks/query/useProduct";
import useProducts from "../../../hooks/query/useProducts";
import DescriptionSection from "./DescriptionSection";
import ImageViewer from "./ImageViewer";
import ProductInfoTable from "./ProductInfoTable";
import ProductVitals from "./ProductVitals";

const ProductMain: React.FC<{ product: any }> = ({ product }) => {
    
    return (
        <Grid
            h="100%"
            templateRows="repeat(11, 1fr)"
            templateColumns="repeat(9, 1fr)"
            gap={2}
            border='1px'
        >
            <GridItem rowSpan={8} colSpan={4} h="40rem">
                <ImageViewer images={product.productImage} />
            </GridItem>
            <GridItem rowSpan={3} colSpan={5} bg="white" borderRadius="0.4rem">
                <ProductVitals product={product} />
            </GridItem>
            <GridItem rowSpan={5} colSpan={5} bg="gray.200" ><ProductInfoTable tableData={product.info}/></GridItem>
            <GridItem rowSpan={3} colSpan={9}  ><DescriptionSection product={product}/></GridItem>
        </Grid>
    );
};

export default ProductMain;
