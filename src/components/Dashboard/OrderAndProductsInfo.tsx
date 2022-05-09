import { Box, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { AiOutlineDropbox } from "react-icons/ai";
import OrderInfo from "./OrderInfo";
import ProductsInfo from "./ProductsInfo";

const buttonCss = `
cursor: pointer;
height: 100%;
font-size:
outline: 0;
color: #fff;
background-color: #0d6efd;
border-color: #0d6efd;
display: inline-block;
font-weight: 400;
line-height: 1.5;
text-align: center;

padding: 6px 12px;
font-size: 2rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
}
display:flex;
align-items:center; 
`;
const disabledbutton = `background-color:#fff;
display:flex;
align-items:center; 
height: 100%;
cursor: pointer;
outline: 0;
font-weight: 400;
line-height: 1.5;
text-align: center;
border-bottom: 4px solid transparent;
padding: 6px 12px;
font-size: 2rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
color: #0d6efd;
border-color: #0d6efd;
:hover {
    color:lightyellow;
    background-color: skyblue;
    border-color: #0d6efd;
}`;
const OrderAndProductsInfo = () => {
    const [ordersSelected, setOrdersSelected] = useState(true);

    const orderClickHandler = () => {
        setOrdersSelected(true);
    };

    const productsClickHandler = () => {
        setOrdersSelected(false);
    };
    return (
        <Stack gap="0" h="100%" w="100%" bg="white">
            <Box w="100%" h="4rem" fontSize="1rem">
                <ButtonGroup h="100%" w="100%" isAttached>
                    <Button
                    borderRadius={0}
                        css={ordersSelected ? buttonCss : disabledbutton}
                        onClick={orderClickHandler}
                        leftIcon={<BiCart />}
                        w="50%"
                    >
                        Orders
                    </Button>
                    <Button
                    borderRadius={0}
                        css={!ordersSelected ? buttonCss : disabledbutton}
                        onClick={productsClickHandler}
                        leftIcon={<AiOutlineDropbox />}
                        w="50%"
                    >
                        Products
                    </Button>
                </ButtonGroup>
            </Box>
            {ordersSelected && <OrderInfo/>}
            {!ordersSelected && <ProductsInfo/>}
        </Stack>
    );
};

export default OrderAndProductsInfo;
