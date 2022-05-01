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
    Select,
    InputLeftAddon,
    InputGroup,
} from "@chakra-ui/react";
import validator from "validator";
import React from "react";
import useForm from "../../hooks/useForm";

const AddressFormMain = ({
    firstNameValue,
    firstNameOnChange,
    firstNameOnFocus,
    wrongFirstName,
    lastNameValue,
    lastNameOnChange,
    lastNameOnFocus,
    wrongLastName,
    emailValue,
    emailOnChange,
    emailOnFocus,
    wrongEmail,
    zipcodeValue,
    zipcodeOnChange,
    zipcodeOnFocus,
    wrongZipcode,
    addressValue,
    addressOnChange,
    addressOnFocus,
    wrongAddress,
    phoneValue,
    phoneOnChange,
    phoneOnFocus,
    wrongPhone,
    cityValue,cityOnChange
}) => {
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
                                    isInvalid={wrongFirstName}
                                >
                                    <FormLabel>First Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={firstNameValue}
                                        onChange={firstNameOnChange}
                                        onFocus={firstNameOnFocus}
                                        _invalid={{
                                            bg: "rgba(226, 60, 38, 0.38)",
                                        }}
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl
                                    id="lastName"
                                    isInvalid={wrongLastName}
                                >
                                    <FormLabel>Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        value={lastNameValue}
                                        onChange={lastNameOnChange}
                                        onFocus={lastNameOnFocus}
                                        _invalid={{
                                            bg: "rgba(226, 60, 38, 0.38)",
                                        }}
                                    />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl
                            id="street-address"
                            isRequired
                            isInvalid={wrongAddress}
                        >
                            <FormLabel>Street Address</FormLabel>
                            <Input
                                type="text"
                                value={addressValue}
                                onChange={addressOnChange}
                                onFocus={addressOnFocus}
                                _invalid={{ bg: "rgba(226, 60, 38, 0.38)" }}
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
                                    isInvalid={wrongZipcode}
                                >
                                    <FormLabel>Zip Code</FormLabel>
                                    <Input
                                        type="number"
                                        value={zipcodeValue}
                                        onChange={zipcodeOnChange}
                                        onFocus={zipcodeOnFocus}
                                        _invalid={{
                                            bg: "rgba(226, 60, 38, 0.38)",
                                        }}
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
                                    <Select placeholder="Select option" value={cityValue} onChange={cityOnChange}>
                                        <option value="Delhi">Delhi</option>
                                    </Select>
                                </FormControl>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box w="50%">
                                <FormControl
                                    id="email"
                                    isRequired
                                    isInvalid={wrongEmail}
                                >
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        type="email"
                                        value={emailValue}
                                        onChange={emailOnChange}
                                        onFocus={emailOnFocus}
                                        _invalid={{
                                            bg: "rgba(226, 60, 38, 0.38)",
                                        }}
                                    />
                                    <FormErrorMessage>
                                        Enter a valid Email Id
                                    </FormErrorMessage>
                                </FormControl>
                            </Box>
                            <Box w="50%">
                                <FormControl
                                    id="email"
                                    isRequired
                                    isInvalid={wrongPhone}
                                >
                                    <FormLabel>Phone</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon children="+91" />
                                        <Input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={phoneValue}
                                            onChange={phoneOnChange}
                                            onFocus={phoneOnFocus}
                                            _invalid={{
                                                bg: "rgba(226, 60, 38, 0.38)",
                                            }}
                                        />
                                    </InputGroup>
                                    <FormErrorMessage>
                                        Enter a valid Phone Number
                                    </FormErrorMessage>
                                </FormControl>
                            </Box>
                        </HStack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default AddressFormMain;
