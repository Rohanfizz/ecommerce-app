import React from "react";
import {
    Flex,
    useColorModeValue,
    ButtonGroup,
    IconButton,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
    Box,
    Tooltip,
} from "@chakra-ui/react";
import {
    AiFillEdit,
    AiOutlineEye,
    AiOutlineEyeInvisible,
    AiOutlinePlus,
} from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function ProductTable() {
    // const header = ["name", "created", "actions"];
    const header = ["Name", "createdAt", "Price", "Stock", "Actions"];
    const objectOrder = ["name", "createdAt", "price", "stock"];
    const data = [
        {
            _id: "62719625c8b8d6b6a4d07ff4",
            createdAt: "2022-05-03T18:28:06.208Z",
            name: "Lates Product",
            stock: 89,
            price: 1318,
            active: true,
            id: "62719625c8b8d6b6a4d07ff4",
        },
        {
            _id: "62719625c8b8d6b6a4d07ff4",
            createdAt: "2022-05-03T18:28:06.208Z",
            name: "Lates Product",
            stock: 0,
            price: 1318,
            active: false,
            id: "62719625c8b8d6b6a4d07ff4",
        },
    ];
    const colorCodes = {
        Placed: "#FEFCBF",
        Approved: "green.300",
        Processing: "pink.200",
        Dispatched: "teal.400",
        "Out For Delivery": "red.200",
        Delivered: "blue.200",
        Cancelled: "blue.200",
    };
    //   const color1 = useColorModeValue("gray.900", "gray.900");
    //   const color2 = useColorModeValue("gray.900", "gray.900");

    return (
        <Flex
            w="full"
            maxH="100%"
            bg="cyan.600"
            p={2}
            // alignItems="center"
            justifyContent="center"
            // border="2px"
            overflow={"auto"}
        >
            <Table
                w="full"
                bg={useColorModeValue("white", "gray.800")}
                display={{
                    base: "block",
                    md: "table",
                }}
                sx={{
                    "@media print": {
                        display: "table",
                    },
                }}
            >
                <Thead
                    display={{
                        base: "none",
                        md: "table-header-group",
                    }}
                    sx={{
                        "@media print": {
                            display: "table-header-group",
                        },
                    }}
                >
                    <Tr>
                        {header.map((x) => (
                            <Th key={x}>{x}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody
                    display={{
                        base: "block",
                        lg: "table-row-group",
                    }}
                    sx={{
                        "@media print": {
                            display: "table-row-group",
                        },
                    }}
                >
                    {/* <Box> */}
                    {data.map((token, tid) => {
                        return (
                            <Tr
                                key={tid}
                                display={{
                                    base: "grid",
                                    md: "table-row",
                                }}
                                sx={{
                                    "@media print": {
                                        display: "table-row",
                                    },
                                    gridTemplateColumns:
                                        "minmax(0px, 35%) minmax(0px, 65%)",
                                    gridGap: "10px",
                                }}
                                bg={token.stock > 0 ? "blue.100" : "red.200"}
                            >
                                {objectOrder.map((x) => {
                                    return (
                                        <React.Fragment key={`${tid}${x}`}>
                                            <Td
                                                display={{
                                                    base: "table-cell",
                                                    md: "none",
                                                }}
                                                sx={{
                                                    "@media print": {
                                                        display: "none",
                                                    },
                                                    textTransform: "uppercase",
                                                    color: "black",
                                                    fontSize: "xs",
                                                    fontWeight: "bold",
                                                    letterSpacing: "wider",
                                                    fontFamily: "heading",
                                                }}
                                            >
                                                {x}
                                            </Td>
                                            <Td
                                                color="black"
                                                fontSize="md"
                                                // fontWeight="hairline"
                                            >
                                                {token[x]}
                                            </Td>
                                        </React.Fragment>
                                    );
                                })}
                                <Td
                                    display={{
                                        base: "table-cell",
                                        md: "none",
                                    }}
                                    sx={{
                                        "@media print": {
                                            display: "none",
                                        },
                                        textTransform: "uppercase",
                                        color: "black",
                                        fontSize: "xs",
                                        fontWeight: "bold",
                                        letterSpacing: "wider",
                                        fontFamily: "heading",
                                    }}
                                >
                                    Actions
                                </Td>
                                <Td>
                                    <ButtonGroup
                                        variant="solid"
                                        size="sm"
                                        spacing={3}
                                    >
                                        <Tooltip label="Visit page">
                                            <IconButton
                                                aria-label="Visit Page"
                                                colorScheme="orange"
                                                icon={<BsBoxArrowUpRight />}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Edit">
                                            <IconButton
                                                aria-label="Edit"
                                                colorScheme="green"
                                                icon={<AiFillEdit />}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Add Stock">
                                            <IconButton
                                                aria-label="Add Stock"
                                                colorScheme={"facebook"}
                                                fontSize={"1.2rem"}
                                                icon={<AiOutlinePlus />}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Visibility">
                                            <IconButton
                                                aria-label="Visibility"
                                                colorScheme="blue"
                                                fontSize={"1.2rem"}
                                                icon={
                                                    token.active ? (
                                                        <AiOutlineEye />
                                                    ) : (
                                                        <AiOutlineEyeInvisible />
                                                    )
                                                }
                                            />
                                        </Tooltip>
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        );
                    })}
                    {/* </Box> */}
                </Tbody>
            </Table>
        </Flex>
    );
}
