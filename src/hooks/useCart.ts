import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userTokenAtom } from "../store/authStore";
import { cartAtom } from "../store/CartStore";
import { productSelector } from "../store/productStore";
import { limitErrorModalShowAtom } from "../store/UtilStore";

const useCart = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const products = useRecoilValue(productSelector);
    const userToken = useRecoilValue(userTokenAtom);
    const [limitErrorModal,setLimitErrorModal] = useRecoilState(limitErrorModalShowAtom);

    const editCartHandler = (
        itemuuid: string,
        name: string,
        productImage: string,
        price: number,
        action: number // 1 | -1
    ) => {

        // check for existance
        const existCartItemIndex = cart.findIndex(
            (item: any) => item.uuid === itemuuid
        );
        const existCartItem = cart[existCartItemIndex];

        let updatedItems;

        if (existCartItem) {

            if(existCartItem.quantity === 20 && action === 1){
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
                uuid: itemuuid,
                name,
                productImage,
                price,
                quantity: 1,
            });
        }
        // make call to backend here    TODO:
        setCart(updatedItems);
    };

    const deleteFromCartHandler = (itemuuid: string,) =>{
        let updatedItems = [...cart];
        console.log(updatedItems.length,itemuuid,cart[0]);

        updatedItems = updatedItems.filter(item=> {console.log(item.uuid,itemuuid);return item.uuid != itemuuid});
        console.log(updatedItems.length);
        // TODO: BACKEND CALL 
        setCart(updatedItems);
    }
    return { editCartHandler,deleteFromCartHandler };
};

export default useCart;
