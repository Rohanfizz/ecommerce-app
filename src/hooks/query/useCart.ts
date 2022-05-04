import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchCart, updateCart } from "../../api/cart";
import { isLoggedInSelector, userTokenAtom } from "../../store/authStore";
import {
    cartAtom,
    fetchingCartAtom,
    subTotalCartAtom,
    updatingCartAtom,
} from "../../store/CartStore";
import { productAtom } from "../../store/productStore";
import { limitErrorModalShowAtom } from "../../store/UtilStore";

const subtotalCalc = (updatedItems: any[]) => {
    let subtotal = 0;
    updatedItems.forEach((ele) => {
        subtotal += ele.product.price * ele.quantity;
    });

    return subtotal;
};

const useCart = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const [subtotal, setSubtotal] = useRecoilState(subTotalCartAtom);
    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    const [limitErrorModal, setLimitErrorModal] = useRecoilState(
        limitErrorModalShowAtom
    );
    const [updatingCart, setupdatingCart] = useRecoilState(updatingCartAtom);

    const { refetch: updateCartQuery } = useQuery(
        "cart-update",
        () => updateCart(cart.products, cart.subtotal),
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
        productImage: string[],
        price: number,
        tax,
        action: number // 1 | -1
    ) => {
        // check for existance
        // console.log(cart);
        const existCartItemIndex = cart.products.findIndex((product: any) => {
            return product.product._id === item_id;
        });

        const existCartItem = cart.products[existCartItemIndex];

        let updatedItems;

        if (existCartItem) {
            // if (existCartItem.quantity === 20 && action === 1) {
            //     setLimitErrorModal(true);
            //     return;
            // }
            const updatedItem = {
                ...existCartItem,
                quantity: existCartItem.quantity + action,
            };
            updatedItems = [...cart?.products];
            updatedItems[existCartItemIndex] = updatedItem;
        } else {
            updatedItems = [...cart?.products];
            updatedItems.push({
                product: {
                    _id: item_id,
                    name,
                    productImage,
                    price,
                    tax
                },
                quantity: 1,
            });
        }
        const subtotal = subtotalCalc(updatedItems);
        const newCart = { products: updatedItems, subtotal: subtotal };
        // setSubtotal(subtotal);
        // console.log(newCart);
        setCart(newCart);
        setupdatingCart(true);
    };

    const deleteFromCartHandler = (item_id: string) => {
        let updatedItems = [...cart.products];

        updatedItems = updatedItems.filter((product: any) => {
            return product.product._id !== item_id;
        });

        // TODO: BACKEND CALL
        const subtotal = subtotalCalc(updatedItems);
        const newCart = { products: updatedItems, subtotal: subtotal };
        setSubtotal(subtotal);
        setCart(newCart);
        setupdatingCart(true);
    };
    return {
        editCartHandler,
        deleteFromCartHandler,
        cart,
    };
};

export default useCart;
