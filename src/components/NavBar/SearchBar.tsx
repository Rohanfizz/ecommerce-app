import {
    Box,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import React from "react";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.2)",
};

function SearchBar() {
    return (
        <Flex h="90%" w="40%" alignItems={"center"}>
            <InputGroup>
                <Input
                    type="tel"
                    placeholder="Search"
                    bgColor="cyan.100"
                    fontSize={"1.5rem"}
                />
                <InputRightElement bgColor="primary2" borderRadius={"10%"}>
                    <Icon as={BsSearch} _hover={hoverCss} />
                </InputRightElement>
            </InputGroup>
        </Flex>
    );
}

export default SearchBar;
