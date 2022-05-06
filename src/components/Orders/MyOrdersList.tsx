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
    Tooltip,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { FaDownload, FaMapMarkerAlt } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { wholeScreenLoadingAtom } from "../../store/UtilStore";
import fileDownload from "js-file-download";
import { setRecoil } from "recoil-nexus";
import { getInvoice } from "../../api/order";
import { useRouter } from "next/router";

export default function Component({ data, heading }) {
    const router = useRouter();
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
    const color1 = useColorModeValue("gray.400", "gray.400");
    const color2 = useColorModeValue("gray.400", "gray.400");

    
    
        const downloadInvoiceHandler = async (oid) => {
            setRecoil(wholeScreenLoadingAtom,true);
            const invoice:any = await getInvoice(oid);
            console.log(invoice);
            const blob = new Blob([invoice.data],{type:'application/pdf'});
            fileDownload(blob,'invoice.pdf');
            setRecoil(wholeScreenLoadingAtom,false);
        };
        const trackOrderHandler =(oid)=>{
            router.push(`/order/track/${oid}`);
        }

    
    return (
        <Flex
            w="full"
            bg="gray.200"
            p={50}
            alignItems="center"
            justifyContent="center"
            borderRadius={"0.5rem"}
            
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
                    {data.map((order, tid) => {
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
                            >
                                {objectOrder.map((x) => {
                                    if (x === "_id" || x === "id") return <></>;
                                    return (
                                        <React.Fragment key={1}>
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
                                                    color: color1,
                                                    fontSize: "xs",
                                                    fontWeight: "bold",
                                                    letterSpacing: "wider",
                                                    fontFamily: "heading",
                                                }}
                                            >
                                                {x}
                                            </Td>
                                            <Td
                                                color={"gray.600"}
                                                fontSize="md"
                                                // fontWeight="hairline"
                                            >
                                                {x === "createdAt"
                                                    ? new Date(
                                                          order[x]
                                                      ).toLocaleDateString()
                                                    : order[x]}
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
                                        color: color2,
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
                                        <Tooltip label="Track Order">
                                            <IconButton
                                                aria-label="Track-Order"
                                                colorScheme="purple"
                                                icon={<FaMapMarkerAlt />}
                                                onClick={()=>{trackOrderHandler(order._id)}}
                                            />
                                            
                                        </Tooltip>
                                        <Tooltip label="Download Invoice">
                                            <IconButton
                                                aria-label="Download-Invoice"
                                                colorScheme="red"
                                                icon={<FaDownload />}
                                                onClick={()=>{downloadInvoiceHandler(order._id)}}
                                            />
                                        </Tooltip>
                                        {/* <IconButton
                                            colorScheme="red"
                                            variant="outline"
                                            icon={<BsFillTrashFill />}
                                        /> */}
                                    </ButtonGroup>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Flex>
    );
}
