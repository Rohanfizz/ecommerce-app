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
import { useRecoilState } from "recoil";
import { setRecoil } from "recoil-nexus";
import useFilterBox from "../../../hooks/useFilterBox";
import {
    fetchingProductsAtom,
    priceGTEAtom,
    priceLTEAtom,
} from "../../../store/productStore";
import CategorySelector from "./CategorySelector";
import ColorSelector from "./ColorSelector";

const followerCss = {
    // position: '-webkit-sticky',
    position: "sticky",
    top: 20,
    // backgroundColor: 'green',
    // border: '2px solid #4CAF50'
};

const categories = [
    "Lipstick",
    "Foundation",
    "Perfume",
    "Cream",
    "Highlighter",
    "Spray",
    "Eyeliner",
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
function FilterBox() {
    const { priceGTE, priceLTE, priceGTEOnChange, priceLTEOnChange } =
        useFilterBox();

    return (
        <Box
            // h="100%"
            w="100%"
            borderRadius={"0.5rem"}
            boxShadow="xl"
            p="6"
            rounded="md"
            bg="white"
            sx={followerCss}
        >
            <Text fontSize={"2rem"}>Filters</Text>

            <CategorySelector categories={categories} />

            <Text fontSize={"md"} fontFamily="mono" marginTop="0.5rem">
                Price
            </Text>
            <Flex>
                <Input
                    placeholder="Min"
                    type="number"
                    min={0}
                    value={priceGTE}
                    onChange={priceGTEOnChange}
                />
                <Input
                    placeholder="Max"
                    type="number"
                    min={0}
                    value={priceLTE}
                    onChange={priceLTEOnChange}
                />
            </Flex>
            {/* <ColorSelector colors={colors} /> */}
            <Flex
                w="100%"
                justifyContent="flex-end"
                alignItems={"center"}
                paddingLeft="1rem"
                marginTop="0.5rem"
                gap="0.5rem"
            >
                <Button position={"relative"}>Cancel</Button>
                <Button
                    position={"relative"}
                    onClick={() => setRecoil(fetchingProductsAtom, true)}
                >
                    Apply Filters
                </Button>
            </Flex>
        </Box>
    );
}

export default FilterBox;
