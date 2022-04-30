import {
    Link,
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";

import React from "react";

const AddressFormMain = () => {
    return (
        <Flex
            flexDir="column"
            h="100%"
            w="100%"
            // border="1px"
            borderRadius={"0.5rem"}
            boxShadow="xl"
            p="1.5"
            rounded="md"
            bg="white"
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={1} px={6}>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    // boxShadow={"lg"}
                    p={1}
                >
                    <Stack spacing={4}>
                        <Heading fontFamily={"verdana"} fontSize="1.5rem">
                            Shipping Address
                        </Heading>
                        <HStack>
                            <Box>
                                <FormControl
                                    id="firstName"
                                    isRequired
                                    // isInvalid={wrongFirstName}
                                >
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        type="text"
                                        // value={firstNameValue}
                                        // onChange={firstNameOnChange}
                                        // onFocus={firstNameOnFocus}
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl
                                    id="lastName"
                                    // isInvalid={wrongLastName}
                                >
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        // value={lastNameValue}
                                        // onChange={lastNameOnChange}
                                        // onFocus={lastNameOnFocus}
                                    />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl
                            id="street-address"
                            isRequired
                            // isInvalid={wrongEmail}
                        >
                            <FormLabel>Street Address</FormLabel>
                            <Input
                                type="text"
                                // value={emailValue}
                                // onChange={emailOnChange}
                                // onFocus={emailOnFocus}
                            />
                            <FormErrorMessage>
                                Enter a valid Street Address
                            </FormErrorMessage>
                        </FormControl>
                        <HStack>
                            <Box w="30%">
                                <FormControl
                                    id="zipCode"
                                    isRequired
                                    // isInvalid={wrongFirstName}
                                >
                                    <FormLabel>Zip Code</FormLabel>
                                    <Input
                                        type="number"
                                        // w="60%"
                                        // value={firstNameValue}
                                        // onChange={firstNameOnChange}
                                        // onFocus={firstNameOnFocus}
                                    />
                                </FormControl>
                            </Box>
                            <Box w="70%">
                                <FormControl
                                    id="city"
                                    isRequired
                                    // isInvalid={wrongFirstName}
                                >
                                    <FormLabel>City</FormLabel>
                                    <Input
                                        type="text"
                                        w="100%"
                                        // value={firstNameValue}
                                        // onChange={firstNameOnChange}
                                        // onFocus={firstNameOnFocus}
                                    />
                                </FormControl>
                            </Box>
                        </HStack>

                        <FormControl
                            id="email"
                            isRequired
                            // isInvalid={wrongEmail}
                        >
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                // value={emailValue}
                                // onChange={emailOnChange}
                                // onFocus={emailOnFocus}
                            />
                            <FormErrorMessage>
                                Enter a valid Email Id
                            </FormErrorMessage>
                        </FormControl>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default AddressFormMain;
