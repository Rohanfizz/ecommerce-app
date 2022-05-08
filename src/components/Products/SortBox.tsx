import { Flex, Select } from "@chakra-ui/react";
import React from "react";
import { setRecoil } from "recoil-nexus";
import { fetchingProductsAtom, sortByAtom } from "../../store/productStore";

function SortBox() {
    
    const sorter = (e: any) => {
        const val = e.target.value;
        setRecoil(sortByAtom,val);
        setRecoil(fetchingProductsAtom,true);
    };


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
            <Select
                // placeholder="New Arrivals"
                defaultValue={'createdAt'}
                variant="flushed"
                w="auto"
                onChange={sorter}
            >
                <option value="createdAt">New Arrivals</option>
                <option value="price">Price: low to high</option>
                <option value="-price">Price: High to Low</option>
                <option value="ratingNumber">Avg. Customer Reviews</option>
            </Select>
            {/* </Flex> */}
        </Flex>
    );
}

export default SortBox;
