import React from "react";
import { fetchUserOrders } from "../../src/api/order";
import MyOrdersMain from "../../src/components/Orders/MyOrdersMain";
import useMyOrders from "../../src/hooks/query/useMyOrders";

const MyOrdersPage = () => {

    // useMyOrders();

    return (
        <>
            <MyOrdersMain />
        </>
    );
};

export default MyOrdersPage;
