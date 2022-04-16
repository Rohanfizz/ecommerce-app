import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";

function SortBox() {
    return (
        <Flex
            w="100%"
            // h="3rem"
            alignItems={"center"}
            paddingLeft="1rem"
            paddingRight="1rem"
            // border="1px"
            justifyContent="flex-end"
            // borderRadius={"0.5rem"} boxShadow='2xl' p='6' rounded='md' bg='white'
        >
            
            {/* <Flex alignItems={"center"} justifyContent="flex-end"> */}
                Sort By:
                <Select placeholder="Featured" variant="flushed" w="auto">
                    <option value="option1">Price: low to high</option>
                    <option value="option2">Price: High to Low</option>
                    <option value="option3">Avg. Customer Reviews</option>
                    <option value="option3">New Arrivals</option>
                </Select>
            {/* </Flex> */}
        </Flex>
    );
}

export default SortBox;
