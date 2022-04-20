import { Box } from "@chakra-ui/react";
import React from "react";
import ItemsViewer from "./ItemsViewer";
import TotalViewer from "./TotalViewer";

const CartContent: React.FC<{ items: any }> = ({ items }) => {
    return (
        <Box h="100%" w="100%">
            <Box h="90%">
                <ItemsViewer items={items} />
            </Box>
            <Box h="10%">
                <TotalViewer items={items} />
            </Box>
        </Box>
    );
};

export default CartContent;
