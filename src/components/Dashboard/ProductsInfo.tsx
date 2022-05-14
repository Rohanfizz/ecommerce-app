import {
    Box,
    Button,
    Flex,
    Select,
    SelectField,
    Stack,
    Radio,
    RadioGroup,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import { useFetchProductData } from "../../hooks/query/useFetchProductData";
import ProductInfoTable from "../Products/ProductPage/ProductInfoTable";
import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";

const ProductInfo = () => {
    const router = useRouter();
    const {
        data,
        setSorter,
        refetchProducts,
        isLoading,
        setfetchingProduct,
        setAsc,
    } = useFetchProductData();

    const refreshButton = () => {
        refetchProducts();
    };
    const changeSortOrderHandler = (e: any) => {
        // console.log(e);
        if (e === "1") setAsc(true);
        else setAsc(false);
        setfetchingProduct(true);
    };
    const changeSorterHandler = (e: any) => {
        setSorter(e.target.value);
        // refetchOrders();
        setfetchingProduct(true);
    };

    return (
        <Stack h="100%" w="100%">
            <Flex justifyContent={"flex-end"} gap="2rem" paddingRight={"1rem"}>
                <Button
                    colorScheme={"red"}
                    color="white"
                    rightIcon={<BiRefresh fontSize={"1.5rem"} />}
                    onClick={refreshButton}
                >
                    Refresh
                </Button>
                <RadioGroup defaultValue="1" onChange={changeSortOrderHandler}>
                    <Stack
                        spacing={5}
                        direction="row"
                        alignItems={"center"}
                        h="100%"
                        defaultValue={"2"}
                    >
                        <Radio colorScheme="red" value="2">
                            Ascending
                        </Radio>

                        <Radio colorScheme="green" value="1">
                            Descending
                        </Radio>
                    </Stack>
                </RadioGroup>
                <Select
                    // placeholder="All"
                    // defaultValue={"stock"}
                    w="20%"
                    variant={"filled"}
                    bg="blue.100"
                    onChange={changeSorterHandler}
                >
                    <option value="stock">Stock</option>
                    <option value="createdAt">CreatedAt</option>
                    <option value="price">Price</option>
                    <option value="ratingNumber">Reviews</option>
                    <option value="sold">Sold</option>
                    <option value="boughtPrice">Bought Price</option>
                </Select>
            </Flex>
            <Box maxH="calc(100% - 8rem)">
                <ProductTable data={data} router={router} setfetchingProduct={setfetchingProduct} />
            </Box>
        </Stack>
    );
};

export default ProductInfo;
