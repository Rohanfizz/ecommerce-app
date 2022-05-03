import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil"
import { fetchUserOrders } from "../../api/order";
import { fetchMyOrdersAtom, myOrdersAtom } from "../../store/CartStore"

const useMyOrders = ()=>{
    // const [myOrders,setmyOrders] = useRecoilState(myOrdersAtom);
    // const [fetchMyOrders,setfetchMyOrders]= useRecoilState(fetchMyOrdersAtom);

    // useQuery('my-orders',()=>fetchUserOrders(),{
    //     enabled: fetchMyOrders,
    //     retry: 0,
    //     onSettled: (data) => {
    //         console.log(data);
    //         setfetchMyOrders(false);
    //     },
    // })
    // useEffect(() => {
    //   setfetchMyOrders(true);
    // }, [])
    

}
export default useMyOrders;