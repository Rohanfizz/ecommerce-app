import {
    Box,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";
import { fetchSuggestions } from "../../api/products";
import { useRecoilState } from "recoil";
import { showSearchBarModal } from "../../store/searchStore";
import SearchBarModal from "./SearchBarModal";
const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.2)",
};

function SearchBar() {
    const [showSearchModal, setSearchModal] =
        useRecoilState(showSearchBarModal);

    return (
        <Flex h="90%" w="40%" alignItems={"center"}>
            {showSearchBarModal && <SearchBarModal />}
            <InputGroup>
                <Input
                    type="tel"
                    placeholder="Search"
                    bgColor="cyan.100"
                    fontSize={"1.5rem"}
                    onClick={() => setSearchModal(true)}
                />
                <InputRightElement bgColor="primary2" borderRadius={"10%"}>
                    <Icon as={BsSearch} _hover={hoverCss} />
                </InputRightElement>
            </InputGroup>
        </Flex>
    );
}

export default SearchBar;
