import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavLogo from "./NavLogo";
import NavUtilLogos from "./NavUtilLogos";
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <Box bgColor={"primary"} h="4.5rem" w={"100%"} paddingLeft="1rem" paddingRight="1rem" minW="90rem">
            <Flex h="100%" w ="100%" justifyContent={"space-between"} alignItems="center">
                <NavLogo />
                <SearchBar />
                <NavUtilLogos />
            </Flex>
        </Box>
    );
}

export default Navbar;
