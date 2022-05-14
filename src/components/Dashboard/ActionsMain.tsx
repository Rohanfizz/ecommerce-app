import { Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import AddProductModal from "./AddProductModal";

const ActionsMain = () => {
  const [isOpen,setIsOpen] = useState(false);
    return (
      <>
      {isOpen && <AddProductModal isOpen={isOpen} onClose={()=>{setIsOpen(false)}}/>}
        <Stack h="100%">
          
            <Text fontSize="2rem" color="gray.500">
                Actions
            </Text>
            <Flex
                w="100%"
                h="80%"
                alignItems={"center"}
                justifyContent="center"
            >
                <VStack  p='2' _hover={{bg:'gray.200',cursor:'pointer'}}  rounded='md' onClick={()=>setIsOpen(true)}>
                    <Icon as={BiAddToQueue} fontSize="5rem" />
                    <Text fontSize="2rem">Add Product</Text>
                </VStack>
            </Flex>
        </Stack>
        </>
    );
};

export default ActionsMain;
