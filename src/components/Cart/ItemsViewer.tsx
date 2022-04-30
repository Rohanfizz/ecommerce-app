import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Grid,
    GridItem,
    Image,
    Modal,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import Cart, { CartProduct } from "../../Models/cartModel";
import { cartAtom } from "../../store/CartStore";
import CartItem from "./CartItem";
import YourCartIsEmpty from "./YourCartIsEmpty";

const ItemsViewer: React.FC<{ cart: Cart; editItem: any; deleteItem: any }> = ({
    cart,
    editItem,
    deleteItem,
}) => {
    // const cart = useRecoilValue(cartAtom);
    return (
        <Box
            h="100%"
            borderBottom={"1px"}
            overflowY="auto"
            css={{
                ".&::-webkit-scrollbar": {
                    display: "none",
                },

                /* Hide scrollbar for IE, Edge and Firefox */
                "&": {
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                },
            }}
        >
            {cart.products.length === 0 && <YourCartIsEmpty />}
            {cart.products.map((item: CartProduct, idx: number) => {
                // console.log(item);
                return (
                    <CartItem
                        product={item.product}
                        quantity={item.quantity}
                        key={idx}
                        editItem={editItem}
                        deleteItem={deleteItem}
                    />
                );
            })}
        </Box>
    );
};

export default ItemsViewer;
