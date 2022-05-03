import { Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import useCart from "../../hooks/query/useCart";
import { finalSubtotalSelector } from "../../store/CartStore";
import ItemsViewer from "../Cart/ItemsViewer";
import Finalbill from "./Finalbill";
import OrderBtn from "./OrderBtn";

const BillMain = ({
    firstNameValue,
    lastNameValue,
    emailValue,
    zipcodeValue,
    addressValue,
    phoneValue,
    cityValue,
    paymentMethodValue,
    disabled,
}) => {
    const { editCartHandler, deleteFromCartHandler, cart } = useCart();
    const finalSubtotal = useRecoilValue(finalSubtotalSelector);
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
            <Heading fontFamily="verdana" fontSize="1.5rem">
                Order Details
            </Heading>
            <Stack h="29rem" w="100%">
                <ItemsViewer
                    cart={cart}
                    editItem={editCartHandler}
                    deleteItem={deleteFromCartHandler}
                />
            </Stack>
            <Finalbill
                cartSubtotal={finalSubtotal.cartSubtotal}
                deliveryCharge={finalSubtotal.deliveryCharge}
                taxes={finalSubtotal.taxes}
            />
            <OrderBtn
                disabled={cart.subtotal === 0?1:disabled?2:0}
                firstNameValue={firstNameValue}
                lastNameValue={lastNameValue}
                emailValue={emailValue}
                zipcodeValue={zipcodeValue}
                cityValue={cityValue}
                addressValue={addressValue}
                phoneValue={phoneValue}
                cart={cart}
                deliveryCharge={finalSubtotal.deliveryCharge}
                tax={finalSubtotal.taxes}
                paymentMethodValue={paymentMethodValue}
                totalPrice={
                    finalSubtotal.cartSubtotal +
                    finalSubtotal.deliveryCharge +
                    finalSubtotal.taxes
                }
            />
        </Flex>
    );
};

export default BillMain;
