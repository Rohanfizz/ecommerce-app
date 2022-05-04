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
    firstNameOnBlur,
    wrongFirstName,
    lastNameValue,
    lastNameOnChange,
    lastNameOnBlur,
    wrongLastName,
    emailValue,
    emailOnChange,
    emailOnBlur,
    wrongEmail,
    zipcodeValue,
    zipcodeOnChange,
    zipcodeOnBlur,
    wrongZipcode,
    addressValue,
    addressOnChange,
    addressOnBlur,
    wrongAddress,
    phoneValue,
    phoneOnChange,
    phoneOnBlur,
    wrongPhone,
    cityValue,
    cityOnChange,
    wrongCity,cityOnBlur
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
                                        onBlur={firstNameOnBlur}
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
                                        onBlur={lastNameOnBlur}
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
                                onBlur={addressOnBlur}
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
                                        onBlur={zipcodeOnBlur}
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
                                    isInvalid={wrongCity}
                                    onBlur={cityOnBlur}
                                >
                                    <FormLabel>City</FormLabel>
                                    <Select
                                        placeholder="Select option"
                                        value={cityValue}
                                        onChange={cityOnChange}
                                    >
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
                                        onBlur={emailOnBlur}
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
                                        <InputLeftAddon >+91</InputLeftAddon>
                                        <Input
                                            type="tel"
                                            placeholder="Phone Number"
                                            value={phoneValue}
                                            onChange={phoneOnChange}
                                            onBlur={phoneOnBlur}
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
