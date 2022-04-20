import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavLogo from "./NavLogo";
import NavUtilLogos from "./NavUtilLogos";
import SearchBar from "./SearchBar";

const followerCss = {
    // position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    zIndex:'999'
    // backgroundColor: 'green',
    // border: '2px solid #4CAF50'
}
function Navbar() {
    return (
        <Box bgColor={"primary"} h="4.5rem" w={"100%"} paddingLeft="1rem" paddingRight="1rem" minW="90rem" sx={followerCss}>
            <Flex h="100%" w ="100%" justifyContent={"space-between"} alignItems="center">
                <NavLogo />
                <SearchBar />
                <NavUtilLogos />    
            </Flex>
        </Box>
    );
}

export default Navbar;
