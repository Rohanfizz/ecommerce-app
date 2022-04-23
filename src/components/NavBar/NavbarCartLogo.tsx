import { Flex, Icon, Text, useDisclosure, keyframes } from "@chakra-ui/react";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartAtom, cartOpenAtom } from "../../store/CartStore";
import CartModal from "../Cart/CartModal";
import { motion } from "framer-motion";
import { pop } from "../../motion/variants";
import LimitErrorModal from "../Cart/LimitErrorModal";
import { limitErrorModalShowAtom } from "../../store/UtilStore";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.1)",
};

const NavbarCartLogo = () => {
    const LimitErrorModalShow = useRecoilValue(limitErrorModalShowAtom);
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpenAtom);
    const cart = useRecoilValue(cartAtom);

    const totalQuantity: number = cart.reduce(
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
            onClick={()=> setCartIsOpen(true)}
        >
            <Icon as={BsCart4} />{" "}
            {/* <motion.div
                variants={pop}
                initial="hidden"
                animate='visible'
                style={{ height: "100%" }}
            > */}
            <Flex
                alignItems={"center"}
                justifyContent="center"
                bg="primary"
                borderRadius={"20%"}
                h="2rem"
                w="2rem"
                textAlign={"center"}
            >
                <Text fontSize={"1.6rem"}>{totalQuantity}</Text>
            </Flex>
            {/* </motion.div> */}
            <CartModal  />
            {LimitErrorModalShow && <LimitErrorModal />}
        </Flex>
    );
};

export default NavbarCartLogo;
