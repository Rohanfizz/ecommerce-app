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
import CartItem from "./CartItem";
import YourCartIsEmpty from "./YourCartIsEmpty";

const ItemsViewer: React.FC<{ items: any }> = ({ items }) => {
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
        {items.length === 0 && <YourCartIsEmpty/>}
            {items.map((item: any, idx: number) => {
                return <CartItem product={item} key={idx} />;
            })}
        </Box>
    );
};

export default ItemsViewer;
