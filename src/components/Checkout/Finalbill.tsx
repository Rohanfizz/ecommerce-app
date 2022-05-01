import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";

const subHeading = { fontSize: "1rem", fontStyle: "italic" };
const subHeadingPrice = {
    fontSize: "1rem",
    fontStyle: "italic",
    // fontWeight: "bold",
};
const finalSubtotal = { fontSize: "1.8rem", fontStyle: "italic" };
const finalSubtotalPrice = {
    fontSize: "1.8rem",
    fontStyle: "italic",
    fontWeight: "bold",
};
const Finalbill = ({ cartSubtotal, deliveryCharge, taxes }) => {
    // console.log(cartSubtotal, deliveryCharge, taxes);
    return (
        <TableContainer>
            <Table size="sm">
                <Tbody>
                    <Tr>
                        <Td>
                            <Text sx={subHeading}>Cart Subtotal</Text>
                        </Td>
                        <Td sx={subHeadingPrice} isNumeric>
                            <Text>
                                {"₹"}
                                {cartSubtotal}
                                {"/-"}
                            </Text>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Text sx={subHeading}>Delivery Charges</Text>
                        </Td>
                        <Td sx={subHeadingPrice} isNumeric>
                            <Text>
                                {"₹"}
                                {deliveryCharge}
                                {"/-"}
                            </Text>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Text sx={subHeading}>Taxes</Text>
                        </Td>
                        <Td sx={subHeadingPrice} isNumeric>
                            <Text>
                                {"₹"}
                                {taxes}
                                {"/-"}
                            </Text>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Text sx={finalSubtotal}>Subtotal</Text>
                        </Td>
                        <Td sx={finalSubtotalPrice} isNumeric>
                            {cartSubtotal + deliveryCharge + taxes}
                        </Td>
                    </Tr>
                </Tbody>
                {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
            </Table>
        </TableContainer>
    );
};

export default Finalbill;
