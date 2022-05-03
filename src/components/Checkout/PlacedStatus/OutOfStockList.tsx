import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { MdUpdate } from "react-icons/md";
import { useRecoilState } from "recoil";
import { cartOpenAtom } from "../../../store/CartStore";
import { outOfStockItemsAtom } from "../../../store/UtilStore";

const updateCartButtonCss = `
display: flex;
align-items: center;
justify-content:center;
outline: 0;
cursor: pointer;
border-radius: 6px;
border: 2px solid #ff4742;
color: #fff;
padding: 8px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;

font-size: 1.7rem;
height: 4rem;
:hover{
    background: #48BB78;
    color: white;
}
`;

const OutOfStockList = () => {
    const [outOfStockItems, setoutOfStockItem] =
        useRecoilState(outOfStockItemsAtom);
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpenAtom);

    const router= useRouter();
    const goHomeHandler= ()=>{
        router.replace('/');
    }   
    return (
        <>
            <Flex
                flexDir="column"
                maxH="30rem"
                w="60%"
                // border="1px"
                borderRadius={"0.5rem"}
                boxShadow="xl"
                p="5"
                rounded="md"
                bg="white"
                _hover={{ cursor: "pointer" }}
                textAlign="center"
                alignItems={"center"}
                gap={5}
            >
                <Box h="80%" w="100%" overflow="auto">
                    <VStack gap="4">
                        <Text fontFamily={"verdana"} fontSize="1xl">
                            We are not able to fullfill the following cart
                            requirements
                        </Text>
                        <TableContainer maxH="100%">
                            <Table variant="simple" h="100%">
                                <TableCaption>
                                    Please Update Cart OR Delete the listed
                                    items
                                </TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Item Name</Th>
                                        <Th isNumeric>Available Stock</Th>
                                    </Tr>
                                </Thead>
                                <Tbody h="100%">
                                    {outOfStockItems?.map((item) => {
                                        return (
                                            <Tr key={item.id}>
                                                <Td maxW="40rem">
                                                    <Text isTruncated>
                                                        {item.name}
                                                    </Text>
                                                </Td>
                                                <Td>
                                                    <Text
                                                        color="red"
                                                        fontWeight={"bold"}
                                                    >
                                                        {item.stock}
                                                    </Text>
                                                </Td>
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </VStack>
                </Box>
                <Button
                    leftIcon={<Icon as={MdUpdate} color="white" />}
                    onClick={() => setCartIsOpen(true)}
                    css={updateCartButtonCss}
                    bg={"red.400"}
                    p={1}
                >
                    Update Cart
                </Button>
                <Button
                    leftIcon={<Icon as={AiOutlineHome} color="white" />}
                    onClick={goHomeHandler}
                    css={updateCartButtonCss}
                    p={1}
                    bg={"blue.400"}
                >
                    Go Home
                </Button>
            </Flex>
        </>
    );
};

export default OutOfStockList;
