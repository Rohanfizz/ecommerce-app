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
import { AiOutlineDownload, AiOutlineHome } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { cartOpenAtom } from "../../../store/CartStore";
import { outOfStockItemsAtom, wholeScreenLoadingAtom } from "../../../store/UtilStore";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getInvoice } from "../../../api/order";
import fileDownload from "js-file-download";
import { setRecoil } from "recoil-nexus";

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
min-width:35%;
font-size: 1.7rem;
height: 4rem;
:hover{
    background: #48BB78;
    color: white;
}
`;

const DownloadInvoice = () => {
    const [outOfStockItems, setoutOfStockItem] =
        useRecoilState(outOfStockItemsAtom);
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpenAtom);

    const router = useRouter();
    const { oid } :any= router.query;

    const downloadInvoiceHandler = async () => {
        setRecoil(wholeScreenLoadingAtom,true);
        const invoice:any = await getInvoice(oid);
        console.log(invoice);
        const blob = new Blob([invoice.data],{type:'application/pdf'});
        fileDownload(blob,'invoice.pdf');
        setRecoil(wholeScreenLoadingAtom,false);
    };

    const trackOrderHandler = ()=>{
        router.push(`/order/track/${oid}`);
    }

    const goHomeHandler = () => {
        router.replace("/");
    };
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
                    {/* <PDFViewer document={{
                        url:
                    }}/> */}
                </Box>

                <Button
                    leftIcon={<Icon as={AiOutlineDownload} color="white" />}
                    onClick={downloadInvoiceHandler}
                    css={updateCartButtonCss}
                    bg={"red.400"}
                    p={1}
                >
                    Download Invoice
                </Button>

                <Button
                    leftIcon={<Icon as={FaMapMarkerAlt} color="white" />}
                    onClick={trackOrderHandler}
                    css={updateCartButtonCss}
                    p={1}
                    bg={"orange.400"}
                >
                    Track Order
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

export default DownloadInvoice;
