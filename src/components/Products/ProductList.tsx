import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import useProducts from "../../hooks/query/useProducts";
import { productAtom } from "../../store/productStore";
import ProductCard from "./Product/ProductCard";


function ProductList() {
    const productList = useRecoilValue(productAtom);
    useProducts();
    
    return (
        <Flex
            h="100%"
            w="100%"
            paddingLeft="1rem"
            flexWrap={'wrap'}
            justifyContent="flex-start"
            gap="1rem"
        >
            {productList.map((product, idx) => (
                <ProductCard product={product} key={idx} />
            ))}
        </Flex>
    );
}

export default ProductList;
