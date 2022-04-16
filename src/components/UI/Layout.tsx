import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import BottomBar from "../NavBar/BottomBar";
import Navbar from "../NavBar/Navbar";

const Layout: React.FC = (props: any) => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            minH="100vh"
            w="100%"
            bgColor="back1"
        >
            <Navbar />
            <Box 
            minH="calc( 100vh - 4.5rem - 7rem)" 
            w="90vw" minW="90rem" p="1rem">
                {props.children}
            </Box>
            {/* <Box> */}
                <BottomBar/>
            {/* </Box> */}
        </Flex>
    );
};

export default Layout;
