import React from "react";
import { fetchOrderById } from "../../../src/api/order";
import TrackOrderMain from "../../../src/components/TrackOrder/TrackOrderMain";
import ProtectedRoutes from "../../../src/components/Util/ProtectedRoutes";

const TrackOrderPage = ({ orderInfo }) => {
    return (
        <>
            <ProtectedRoutes>
                <TrackOrderMain orderInfo={orderInfo} />
            </ProtectedRoutes>
        </>
    );
};

export async function getServerSideProps(context) {
    const { oid } = context.params;
    try {
        const response = await fetchOrderById(oid);
        console.log(response);
        return {
            props: {
                orderInfo: response.data.data.order,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                orderInfo: undefined,
            },
        };
    }
}

export default TrackOrderPage;
