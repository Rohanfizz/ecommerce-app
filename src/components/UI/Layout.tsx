import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../NavBar/Navbar";

const Layout: React.FC = (props:any) => {
    return (
        <Box h="100vh" w="100vw">
            <Navbar/>
            
            <Box h="calc( 100vh - 4.5rem)" w="100vw" bgColor="back1">{props.children}</Box>
            <Box></Box>
        </Box>
    );
};

export default Layout;
