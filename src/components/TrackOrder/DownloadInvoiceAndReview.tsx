import React from "react";
import { setRecoil } from "recoil-nexus";

import {
    outOfStockItemsAtom,
    wholeScreenLoadingAtom,
} from "../../store/UtilStore";
import fileDownload from "js-file-download";
import { getInvoice } from "../../api/order";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";

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
// width:4rem;
font-size: 1.7rem;
height: 4rem;
:hover{
    background: #48BB78;
    color: white;
}
`;
const someCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "white",
    color: "gray.100",
    borderRadius: "0.2rem",
    w: "100%",
    h: "100%",
    textAlign: "center",
    fontFamily: "verdana",
    p: 2,
    boxShadow:` rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`
};

const DownloadInvoiceAndReview = ({ oid }) => {
    const downloadInvoiceHandler = async () => {
        setRecoil(wholeScreenLoadingAtom, true);
        const invoice: any = await getInvoice(oid);
        console.log(invoice);
        const blob = new Blob([invoice.data], { type: "application/pdf" });
        fileDownload(blob, "invoice.pdf");
        setRecoil(wholeScreenLoadingAtom, false);
    };

    return (
        <>
            <Flex sx={someCss} >
                <Button
                    leftIcon={<Icon as={AiOutlineDownload} color="white" />}
                    onClick={downloadInvoiceHandler}
                    css={updateCartButtonCss}
                    bg={"red.400"}
                    p={1}
                >
                    Download Invoice
                </Button>
            </Flex>
        </>
    );
};

export default DownloadInvoiceAndReview;
