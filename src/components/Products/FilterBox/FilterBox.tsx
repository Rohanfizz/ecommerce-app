import {
    Box,
    Button,
    Checkbox,
    Flex,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import CategorySelector from "./CategorySelector";
import ColorSelector from "./ColorSelector";

function FilterBox() {
    const categories = [
        "Seasonal",
        "Lipsticks",
        "Foundation",
        "Product x",
        "Product y",
    ];

    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "white",
        "black",
        "purple",
        "brown",
    ];
    return (
        <Box
            // h="100%"
            w="100%"
            borderRadius={"0.5rem"}
            boxShadow="xl"
            p="6"
            rounded="md"
            bg="white"
        >
            <Text fontSize={"2rem"}>Filters</Text>

            <CategorySelector categories={categories} />

            <Text fontSize={"md"} fontFamily="mono" marginTop="0.5rem">
                Price
            </Text>
            <Flex>
                <Input placeholder="Min" type="number" min={0}></Input>
                <Input placeholder="Max" type="number" min={0}></Input>
            </Flex>
            <ColorSelector colors={colors} />
            <Flex
                w="100%"
                justifyContent="flex-end"
                alignItems={"center"}
                paddingLeft="1rem"
                marginTop="0.5rem"
                gap="0.5rem"
            >
                <Button position={"relative"}>Cancel</Button>
                <Button position={"relative"}>Go</Button>
            </Flex>
        </Box>
    );
}

export default FilterBox;
