import {
    Box,
    Button,
    Flex,
    Select,
    SelectField,
    Stack,
} from "@chakra-ui/react";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import ProductInfoTable from "../Products/ProductPage/ProductInfoTable";
import OrderTable from "./OrderTable";
import ProductTable from "./ProductTable";

const ProductInfo = () => {
    return (
        <Stack h="100%" w="100%">
            <Flex justifyContent={"flex-end"} gap="2rem">
                <Button
                    colorScheme={"red"}
                    color="white"
                    rightIcon={<BiRefresh fontSize={"1.5rem"} />}
                >
                    Refresh
                </Button>
                <Select
                    placeholder="All"
                    defaultValue={"All"}
                    w="20%"
                    variant={"filled"}
                    bg="blue.100"
                >
                    <option value="Placed">Placed</option>
                    <option value="Approved">Approved</option>
                    <option value="Processing">Processing</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </Select>
            </Flex>
            <Box maxH="calc(100% - 8rem)">
                <ProductTable />
            </Box>
        </Stack>
    );
};

export default ProductInfo;
