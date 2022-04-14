import { Box, Flex, Icon } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import React from "react";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.2)",
};

function NavUtilLogos() {
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
            paddingRight="3rem"
        >
            <Icon as={BsCart4} _hover={hoverCss}/>
            <Icon as={FaUser} _hover={hoverCss}/>
        </Flex>
    );
}

export default NavUtilLogos;
