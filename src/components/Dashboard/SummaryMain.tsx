import { Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const SummaryMain = () => {
    return (
        <Flex alignItems={"center"} justifyContent="center" h="100%" w="100%">
            <Stack>
                <HStack justifyContent={"center"} >
                    <Icon as={AiFillCheckCircle} color="green" fontSize='3rem' />
                    <Text fontSize='2rem'>App Is Online</Text>
                </HStack>
                <Text fontSize="1rem">Constantly pinging backend server</Text>
            </Stack>
        </Flex>
    );
};

export default SummaryMain;
