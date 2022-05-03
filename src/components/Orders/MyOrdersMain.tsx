import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { setRecoil } from "recoil-nexus";
import { fetchUserOrders } from "../../api/order";
import { MyOrders } from "../../Models/OrderModel";
import { userTokenAtom } from "../../store/authStore";
import { fetchMyOrdersAtom, myOrdersAtom } from "../../store/CartStore";
import { wholeScreenLoadingAtom } from "../../store/UtilStore";
import MyOrdersList from "./MyOrdersList";

const MyOrdersMain = () => {
    const [myOrders, setmyOrders] = useRecoilState(myOrdersAtom);
    const [fetchMyOrders, setfetchMyOrders] = useRecoilState(fetchMyOrdersAtom);
    const userToken = useRecoilValue(userTokenAtom);
    // const inProgress = myOrders?.inProgress;
    // const completed = myOrders?.completed;

    useQuery("my-orders", () => fetchUserOrders(), {
        enabled: fetchMyOrders,
        retry: 0,
        onSettled: (data) => {
            // console.log(data?.data.data.orders);
            setmyOrders(data?.data.data.orders);
            setfetchMyOrders(false);
            setRecoil(wholeScreenLoadingAtom, false);
        },
    });
    useEffect(() => {
        setRecoil(wholeScreenLoadingAtom, true);
        if (typeof window != undefined) setfetchMyOrders(true);
    }, [userToken]);
    return (
        <Flex justifyContent={"center"} w="100%">
            <Stack w="80%">
                <Box bg="blue.100" p="2" borderRadius={'0.4rem'}>
                <Heading as={"h1"} paddingLeft="1rem" fontFamily={'verdana'}>
                    Your Orders 📦
                </Heading>
                </Box>
                <Flex
                    w="100%"
                    flexDir={"column"}
                    gap={4}
                    bg="blue.200"
                    p="5"
                    borderRadius={"0.4rem"}
                >
                    <Heading as={"h3"} size='md' fontFamily={'verdana'} paddingLeft="1rem" color='gray.100'>
                        In Progress
                    </Heading>
                    <MyOrdersList
                        data={
                            myOrders != undefined
                                ? myOrders.inProgress
                                : new MyOrders().inProgress
                        }
                        heading={"In Progress"}
                    />
                    <Heading as={"h3"} size='md' fontFamily={'verdana'} paddingLeft="1rem" color='gray.100'>
                        Completed
                    </Heading>
                    <MyOrdersList
                        data={
                            myOrders != undefined
                                ? myOrders.completed
                                : new MyOrders().completed
                        }
                        heading={"Completed / Cancelled"}
                    />
                </Flex>
            </Stack>
        </Flex>
    );
};

export default MyOrdersMain;
