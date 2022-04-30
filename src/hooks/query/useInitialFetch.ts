import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { fetchCart, fetchInitialCart } from "../../api/cart";
import {
    cartAtom,
    fetchingCartAtom,
    updatingCartAtom,
} from "../../store/CartStore";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";
import { userTokenAtom } from "../../store/authStore";
import { useEffect } from "react";
import localforage from "localforage";
import Cart from "../../Models/cartModel";
const useInitialFetch = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const [userToken, setUserToken] = useRecoilState(userTokenAtom);
    const [fetchingCart, setfetchingCart] = useRecoilState(fetchingCartAtom);
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [errorText, seterrorText] = useRecoilState(errorTextAtom);
    const [cartIsFetched, setcartIsFetched] = useRecoilState(fetchingCartAtom);
    const {
        error: errorFetching,
        refetch: refetchCart,
        isSuccess: isSuccessFetching,
    } = useQuery("cart-fetch", fetchCart, {
        enabled: fetchingCart,
        retry: 0,
        onSettled: (data) => {
            setCart(data?.data?.data?.cart);
            setfetchingCart(false);
        },
        onError: (error) => {
            setCart(new Cart);
            setshowErrorModal(true);
            seterrorText("There was a problem fetching your cart...");
        },
    });

    useEffect(() => {
        const fetcher = async () => {
            const userToken: any  = await localforage.getItem("userToken") ;
            setUserToken(JSON.parse(userToken));
            if (userToken) {
                // await fetchInitialCart();
                setfetchingCart(true);
            }
        };
        if(typeof window !== "undefined") fetcher();
    }, []);
};
export default useInitialFetch;
