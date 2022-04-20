import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const YourCartIsEmpty = () => {
    return (
        <Flex h="100%" w="100%" alignItems={"center"} justifyContent="center">
            <Text
                as="cite"
                fontWeight={"450"}
                color="gray.400"
                fontSize={"2rem"}
            >
                Your Cart Is Empty
            </Text>
        </Flex>
    );
};

export default YourCartIsEmpty;
