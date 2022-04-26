import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchCart, updateCart } from "../../api/cart";
import { isLoggedInSelector, userTokenAtom } from "../../store/authStore";
import {
    cartAtom,
    fetchingCartAtom,
    updatingCartAtom,
} from "../../store/CartStore";
import { productAtom } from "../../store/productStore";
import { limitErrorModalShowAtom } from "../../store/UtilStore";

const useCart = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    const [limitErrorModal, setLimitErrorModal] = useRecoilState(
        limitErrorModalShowAtom
    );
    const [updatingCart, setupdatingCart] = useRecoilState(updatingCartAtom);
    const [fetchingCart, setfetchingCart] = useRecoilState(fetchingCartAtom);

    const {
        error: errorFetching,
        refetch: refetchCart,
        isSuccess: isSuccessFetching,
    } = useQuery("cart-fetch", fetchCart, {
        enabled: false,
        retry: 0,
        onSuccess: (data) => {
            setCart(data?.data?.data?.cart?.products);
            setfetchingCart(false);
        },
    });

    // useEffect(() => {
    //     refetchCart();
    // }, []);

    const { refetch: updateCartQuery } = useQuery(
        "cart-update",
        () => updateCart(cart),
        {
            enabled: updatingCart,
            retry: 0,
            onSettled: (data) => {
                setupdatingCart(false);
            },
        }
    );

    const editCartHandler = (
        item_id: string,
        name: string,
        productImage: string,
        price: number,
        action: number // 1 | -1
    ) => {
        // check for existance
        const existCartItemIndex = cart.findIndex((product: any) => {
            return product.productId === item_id;
        });
        const existCartItem = cart[existCartItemIndex];

        let updatedItems;

        if (existCartItem) {
            if (existCartItem.quantity === 20 && action === 1) {
                setLimitErrorModal(true);
                return;
            }

            const updatedItem = {
                ...existCartItem,
                quantity: existCartItem.quantity + action,
            };
            updatedItems = [...cart];
            updatedItems[existCartItemIndex] = updatedItem;
        } else {
            updatedItems = [...cart];
            updatedItems.push({
                productId: item_id,
                name,
                productImage,
                price,
                quantity: 1,
            });
        }
        setCart(updatedItems);
        setupdatingCart(true);
    };

    const deleteFromCartHandler = (item_id: string) => {
        let updatedItems = [...cart];

        updatedItems = updatedItems.filter((product: any) => {
            return product.productId !== item_id;
        });

        // TODO: BACKEND CALL
        setCart(updatedItems);
        setupdatingCart(true);
    };
    return {
        editCartHandler,
        deleteFromCartHandler,
        // errorFetching,
        // refetchCart,
        // isSuccessFetching,
    };
};

export default useCart;
