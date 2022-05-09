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
import { AiFillEdit } from "react-icons/ai";
import {
    BsBoxArrowUpRight,
    BsFillCaretLeftFill,
    BsFillCaretRightFill,
    BsFillForwardFill,
    BsFillTrashFill,
} from "react-icons/bs";
import { FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import { setRecoil } from "recoil-nexus";
import { wholeScreenLoadingAtom } from "../../store/UtilStore";
import { getInvoice } from "../../api/order";
import fileDownload from "js-file-download";
import { useRouter } from "next/router";

export default function OrderTable({ data ,moveStageHandler}) {
    // const header = ["name", "created", "actions"];

    const header = [
        "invoice",
        "createdAt",
        "Status",
        "Total Amount",
        "Actions",
    ];
    const objectOrder = ["invoice", "createdAt", "orderStatus", "totalPrice"];
    // const data = [
    //     {
    //         _id: "62719625c8b8d6b6a4d07ff4",
    //         createdAt: "2022-05-03T18:28:06.208Z",
    //         invoice: "aJJafV12",
    //         orderStatus: "Placed",
    //         totalPrice: 1318,
    //         id: "62719625c8b8d6b6a4d07ff4",
    //     },
    // ];
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
    const router = useRouter();
    const downloadInvoiceHandler = async (oid) => {
        setRecoil(wholeScreenLoadingAtom, true);
        const invoice: any = await getInvoice(oid);

        const blob = new Blob([invoice.data], { type: "application/pdf" });
        fileDownload(blob, "invoice.pdf");
        setRecoil(wholeScreenLoadingAtom, false);
    };
    const trackOrderHandler = (oid) => {
        router.push(`/order/track/${oid}`);
    };

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
                                bg={colorCodes[token.orderStatus]}
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
                                        <Tooltip label="Move To Next Stage">
                                            <IconButton
                                                isDisabled={
                                                    token.orderStatus ===
                                                    "Placed"
                                                }
                                                onClick={()=>{moveStageHandler(-1,token.orderStatus,token._id)}}
                                                aria-label="Move To Previous Stage"
                                                colorScheme="pink"
                                                icon={<BsFillCaretLeftFill />}
                                            />
                                        </Tooltip>

                                        <Tooltip label="Move To Previous Stage">
                                            <IconButton
                                                isDisabled={
                                                    token.orderStatus ===
                                                    "Delivered" ||
                                                    token.orderStatus ===
                                                    "Cancelled"
                                                }
                                                onClick={()=>{moveStageHandler(1,token.orderStatus,token._id)}}
                                                aria-label="Move To Next Stage"
                                                colorScheme="pink"
                                                icon={<BsFillCaretRightFill />}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Track Order">
                                            <IconButton
                                                aria-label="Track-Order"
                                                colorScheme="purple"
                                                icon={<FaMapMarkerAlt />}
                                                onClick={() => {
                                                    trackOrderHandler(
                                                        token._id
                                                    );
                                                }}
                                            />
                                        </Tooltip>
                                        <Tooltip label="Download Invoice">
                                            <IconButton
                                                aria-label="Download-Invoice"
                                                colorScheme="red"
                                                icon={<FaDownload />}
                                                onClick={() => {
                                                    downloadInvoiceHandler(
                                                        token._id
                                                    );
                                                }}
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
