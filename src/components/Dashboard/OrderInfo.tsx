import {
    Box,
    Button,
    Flex,
    Select,
    SelectField,
    Spinner,
    Stack,
} from "@chakra-ui/react";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import { moveStage } from "../../api/order";
import { useFetchOrderData } from "../../hooks/query/useFetchOrderData";
import OrderTable from "./OrderTable";

const OrderInfo = () => {
    const {
        data,
        filter,
        setFilter,
        refetchOrders,
        isLoading,
        setfetchingOrder,
    } = useFetchOrderData();

    const refreshButton = () => {
        refetchOrders();
    };

    const moveStageHandler =async (factor,orderStatus,id)=>{
        await moveStage(factor,orderStatus,id);
        setfetchingOrder(true);
    }

    

    return (
        <Stack h="100%" w="100%">
            <Flex justifyContent={"flex-end"} gap="2rem">
                <Button
                    colorScheme={"red"}
                    color="white"
                    rightIcon={<BiRefresh fontSize={"1.5rem"} />}
                    onClick={refreshButton}
                >
                    Refresh
                </Button>
                <Select
                    // placeholder="All"
                    // defaultValue={'All'}
                    w="20%"
                    variant={"filled"}
                    bg="blue.100"
                    onChange={(e) => {
                        // console.log(e.target.value);
                        setFilter(e.target.value);
                        // refetchOrders();
                        setfetchingOrder(true);
                    }}
                >
                    <option value="All">All</option>
                    <option value="Placed">Placed</option>
                    <option value="Approved">Approved</option>
                    <option value="Processing">Processing</option>
                    <option value="Dispatched">Dispatched</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </Select>
            </Flex>
            <Box maxH="calc(100% - 8rem)">
                {isLoading && <Spinner/>}
                {!isLoading && <OrderTable data={data} moveStageHandler={moveStageHandler}/>}
            </Box>
        </Stack>
    );
};

export default OrderInfo;
