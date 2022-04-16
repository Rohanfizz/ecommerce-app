import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../NavBar/Navbar";

const Layout: React.FC = (props: any) => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            h="100%"
            w="100%"
            bgColor="back1"
        >
            <Navbar />
            <Box h="calc( 100% - 4.5rem)" w="90vw" minW="90rem" p="1rem">
                {props.children}
            </Box>
            <Box></Box>
        </Flex>
    );
};

export default Layout;
