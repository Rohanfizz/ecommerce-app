import { Flex, Icon, Text, Spinner } from "@chakra-ui/react";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    cartAtom,
    cartOpenAtom,
    fetchingCartAtom,
} from "../../store/CartStore";
import CartModal from "../Cart/CartModal";
import LimitErrorModal from "../Cart/LimitErrorModal";
import { limitErrorModalShowAtom } from "../../store/UtilStore";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.1)",
};

const NavbarCartLogo = () => {
    const LimitErrorModalShow = useRecoilValue(limitErrorModalShowAtom);
    const fetchingCart = useRecoilValue(fetchingCartAtom);
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpenAtom);
    const cart = useRecoilValue(cartAtom);

    const totalQuantity: number = cart?.products?.reduce(
        (totalItems: number, item: any) => {
            return totalItems + item.quantity;
        },
        0
    );

    return (
        <Flex
            borderRadius={"1rem"}
            w="7rem"
            bg="primaryDark"
            h="70%"
            alignItems={"center"}
            justifyContent="center"
            gap="0.5rem"
            _hover={hoverCss}
            onClick={() => {
                setCartIsOpen(true);
            }}
        >
            <Icon as={BsCart4} />{" "}
            <Flex
                alignItems={"center"}
                justifyContent="center"
                bg="primary"
                borderRadius={"20%"}
                h="2rem"
                w="2rem"
                textAlign={"center"}
            >
                <Text fontSize={"1.6rem"}>
                    {fetchingCart ? <Spinner /> : totalQuantity}
                </Text>
            </Flex>
            <CartModal />
            {LimitErrorModalShow && <LimitErrorModal />}
        </Flex>
    );
};

export default NavbarCartLogo;
