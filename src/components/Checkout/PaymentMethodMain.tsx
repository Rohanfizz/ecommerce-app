import {
    Box,
    Flex,
    Heading,
    HStack,
    RadioGroup,
    Stack,
    useColorModeValue,
    useRadioGroup,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import RadioCard from "../UI/RadioCart";

const PaymentMethodMain = ({ paymentMethodValue, paymentMethodOnChange }) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "paymentMethodSelect",
        defaultValue: "Cash On Delivery",
        onChange: console.log,
    });
    const group = getRootProps();
    const options = ["Cash On Delivery", "STRIPE"];

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
            <Stack
                spacing={8}
                mx={"auto"}
                maxW={"lg"}
                py={1}
                px={6}
                textAlign={"start"}
                w="100%"
                h="100%"
            >
                <Box
                    h="100%"
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    // boxShadow={"lg"}
                    p={1}
                >
                    <Stack h="100%">
                        <Heading fontFamily={"verdana"} fontSize="1.5rem">
                            Payment Method
                        </Heading>
                        <VStack
                            {...group}
                            h="70%"
                            display="flex"
                            justifyContent={"center"}
                        >
                            <RadioGroup value={paymentMethodValue} onChange={paymentMethodOnChange}>
                            {options.map((value) => {
                                const radio = getRadioProps({ value });
                                return (
                                    <RadioCard key={value} {...radio}>
                                        {value}
                                    </RadioCard>
                                );
                            })}
                            </RadioGroup>
                        </VStack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default PaymentMethodMain;
