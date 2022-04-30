import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import useCart from "../../hooks/query/useCart";
import ItemsViewer from "../Cart/ItemsViewer";
import Finalbill from "./Finalbill";

const BillMain = () => {
    const { editCartHandler, deleteFromCartHandler, cart } = useCart();
    return (
        <Flex
            flexDir="column"
            h="100%"
            w="100%"
            // border="1px"
            borderRadius={"0.5rem"}
            boxShadow="xl"
            p="1.5"
            rounded="md"
            bg="white"
            gap={4}
            
        >   
        <Heading fontFamily='verdana' fontSize='1.5rem'>Order Details</Heading>
            <Stack  h="30rem" w="100%" >
                <ItemsViewer cart={cart} editItem={editCartHandler} deleteItem={deleteFromCartHandler}/>
            </Stack>
            <Finalbill/>
        </Flex>
    );
};

export default BillMain;
