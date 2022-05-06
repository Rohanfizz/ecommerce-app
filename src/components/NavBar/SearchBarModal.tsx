import {
    Button,
    Icon,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { fetchSuggestions } from "../../api/products";
import { showSearchBarModal } from "../../store/searchStore";

const onHover = `
cursor:pointer;
:hover:{
    color:"darkgray";
    color:blue;
    
}
`;

const SearchBarModal = () => {
    const [show, setShow] = useRecoilState(showSearchBarModal);
    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const searchHandler = async (e: any) => {
        const val = e!.target!.value;
        setSearchValue(val);
        if (val != "") {
            const data = await fetchSuggestions(val);
            setSuggestions(data);
        }
    };
    // const boiler = [
    //     "asasdad",
    //     "asdasdasdaaf",
    //     "dfdsvVdf",
    //     "gooqipzpxchhhhhhhhhhhh",
    // ];
    return (
        <>
            <Modal isOpen={show} onClose={() => setShow(false)} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalBody
                        // bg="teal.200"
                        bg="#00a3c4"
                        borderRadius={"0.4rem"}
                        minWidth="40rem"
                    >
                        <Stack p="2">
                            <InputGroup h="5rem">
                                <Input
                                    type="tel"
                                    placeholder="Search"
                                    bgColor="cyan.100"
                                    fontSize={"1.5rem"}
                                    autoFocus={true}
                                    height="5rem"
                                    onChange={searchHandler}
                                    _focus={{ boxShadow: "none !important" }}
                                />
                                <InputRightAddon
                                    bgColor="primary2"
                                    borderRadius={"10%"}
                                    h="5rem"
                                    w="4rem"
                                    fontSize={"2rem"}
                                    display="flex"
                                    alignItems={"center"}
                                    cursor="pointer"
                                >
                                    <Icon as={BsSearch} />
                                </InputRightAddon>
                            </InputGroup>
                            {suggestions.map((string, idx) => {
                                return (
                                    <Text
                                        key={idx}
                                        h="4rem"
                                        // border="1px"
                                        borderRadius={"0.4rem"}
                                        // bg="blue.100"
                                        bg="#cec8f2"
                                        fontSize={"1.5rem"}
                                        fontFamily="mono"
                                        isTruncated
                                        // display="flex"
                                        alignItems={"center"}
                                        paddingLeft="1rem"
                                        paddingTop="1rem"
                                        color="#1a202c"
                                        css={onHover}
                                        // noOfLines={1}
                                    >
                                        {string}
                                    </Text>
                                );
                            })}
                            {suggestions.length === 0 && (
                                <Text
                                    textAlign={"center"}
                                    h="4rem"
                                    borderRadius={"0.4rem"}
                                    // bg="#cec8f2"
                                    fontSize={"1.5rem"}
                                    fontFamily="mono"
                                    isTruncated
                                    alignItems={"center"}
                                    paddingLeft="1rem"
                                    paddingTop="1rem"
                                    color="gray.300"
                                    as="i"
                                >
                                    No Items Found...
                                </Text>
                            )}
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default SearchBarModal;
