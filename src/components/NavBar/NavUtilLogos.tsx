import { Box, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import React from "react";
import CartModal from "../Cart/CartModal";
import NavbarCartLogo from "./NavbarCartLogo";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.1)",
};

function NavUtilLogos() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            // border="1px solid blue"
            h="90%"
            w="10%"
            fontSize={"2rem"}
            color="white"
            justifyContent={"space-around"}
            // flexDir={"column"}
            alignItems="center"
            // paddingRight="3rem"
        >
            <NavbarCartLogo />
            <Icon as={FaUser} _hover={hoverCss} />
        </Flex>
    );
}

export default NavUtilLogos;
