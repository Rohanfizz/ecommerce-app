import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { fetchCart, fetchInitialCart } from "../../api/cart";
import {
    cartAtom,
    fetchingCartAtom,
    updatingCartAtom,
} from "../../store/CartStore";
import {
    errorTextAtom,
    showErrorModalAtom,
    wholeScreenLoadingAtom,
} from "../../store/UtilStore";
import { isPrivilagedAtom, userTokenAtom } from "../../store/authStore";
import { useEffect } from "react";
import localforage from "localforage";
import Cart from "../../Models/cartModel";
import { validateUser } from "../../api/auth";
import { setRecoil } from "recoil-nexus";
const useInitialFetch = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const [userToken, setUserToken] = useRecoilState(userTokenAtom);
    const [fetchingCart, setfetchingCart] = useRecoilState(fetchingCartAtom);
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [errorText, seterrorText] = useRecoilState(errorTextAtom);
    const [cartIsFetched, setcartIsFetched] = useRecoilState(fetchingCartAtom);

    const [showLoading, setShowLoading] = useRecoilState(
        wholeScreenLoadingAtom
    );

    useQuery("cart-fetch", fetchCart, {
        enabled: fetchingCart,
        retry: 0,
        onSettled: (data) => {
            if (data?.data?.data?.cart) setCart(data?.data?.data?.cart);
            else setCart(new Cart());
            setfetchingCart(false);
        },
        onError: (error) => {
            setCart(new Cart());
            setshowErrorModal(true);
            seterrorText("There was a problem fetching your cart...");
        },
    });

    useEffect(() => {
        const fetcher = async () => {
            const userToken: any = await localforage.getItem("userToken");
            const token = JSON.parse(userToken);
            const user = await validateUser(token);
            
            if (user?.token != null) {
                setUserToken(user?.token);
                setRecoil(isPrivilagedAtom, user?.data?.user?.role != "user");
                setfetchingCart(true);
            }
        };
        if (typeof window !== "undefined") fetcher();
    }, []);
};
export default useInitialFetch;
