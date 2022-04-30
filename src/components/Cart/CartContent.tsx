import { Box } from "@chakra-ui/react";
import React from "react";
import Cart from "../../Models/cartModel";
import ItemsViewer from "./ItemsViewer";
import TotalViewer from "./TotalViewer";

const CartContent: React.FC<{cart:Cart,editItem:any,deleteItem:any}>= ({cart,editItem,deleteItem}) => {
    
    return (
        <Box h="100%" w="100%">
            <Box h="90%">
                <ItemsViewer cart={cart}  editItem={editItem} deleteItem={deleteItem}/>
            </Box>
            <Box h="10%">
                <TotalViewer cart={cart}/>
            </Box>
        </Box>
    );
};

export default CartContent;
