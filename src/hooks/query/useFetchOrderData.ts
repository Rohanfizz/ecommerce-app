import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchAdminOrders, moveStage } from "../../api/order";

export const useFetchOrderData = () => {
    const [filter, setFilter] = useState("All");
    const [data,setData] = useState<any[]>([]);
    const [fetchingOrder,setfetchingOrder] = useState<boolean>(false);
    const {
        refetch: refetchOrders,
        isLoading,
    } = useQuery("orders-getter", () => {
        return fetchAdminOrders(filter)      
    },{
        enabled: fetchingOrder,
        retry: 0,
        onSettled: (data:any) => {
            // console.log(data,'asd');
            setfetchingOrder(false);
            setData(data);
            console.log(data);
        },
    });
    useEffect(()=>{
        refetchOrders();
    },[]);

    

    return { data, filter, setFilter, refetchOrders, isLoading ,setfetchingOrder};
};
