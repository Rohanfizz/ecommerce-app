import {
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";

const ProductInfoTable: React.FC<{ tableData: any }> = ({ tableData }) => {
    return (
        <TableContainer borderRadius={"0.5rem"}
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white">
            <Table variant="striped" colorScheme="teal">
                <Tbody>
                    {Object.keys(tableData).map((key, idx) => {
                        return (
                            <Tr key={idx}>
                                <Td fontWeight={"bold"}>{key}</Td>
                                <Td>{tableData[key]}</Td>
                            </Tr>
                        );
                    })}
                    
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default ProductInfoTable;
