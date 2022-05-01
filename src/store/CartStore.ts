import { atom, RecoilState, selector } from "recoil";
import { setRecoil } from "recoil-nexus";
import Cart from "../Models/cartModel";

export const cartAtom = atom<Cart>({
    key: "cartAtom",
    default: new Cart(),
    // effects: [
    //     ({ onSet }) => {
    //         onSet((newValue) => {
    //             let subtotal = 0;
    //             newValue.forEach((item: any) => {
    //                 subtotal += item.product.quantity * item.product.price;
    //             });
    //             console.log(subtotal);
    //             setRecoil(subTotalCartAtom,subtotal);
    //         });
    //     },
    // ],
});

export const subTotalCartAtom = atom({
    key: "subTotalCartState",
    default: 0,
});

export const cartOpenAtom = atom({
    key: "cartOpenAtom",
    default: false,
});

export const fetchingCartAtom = atom({
    key: "fetchingCartAtom",
    default: false,
});

export const updatingCartAtom = atom({
    key: "updatingCartAtom",
    default: false,
});


export const finalSubtotalSelector = selector({
    key: "finalSubtotalSelector",
    get: ({ get }) => {
        const cart = get(cartAtom);
        // console.log(cart);
        let cartSubtotal = cart.subtotal;
        let deliveryCharge = 0;
        let taxes:number = 0;
        if (cart.subtotal <= 300 && cart.subtotal>0) deliveryCharge = 100;
        cart.products.forEach((product) => {
            taxes += 1*(product?.product?.tax);
        });
        // console.log(cart,taxes);
        taxes = Math.round(taxes);
        // console.log(taxes);
        return { cartSubtotal, deliveryCharge, taxes };
    },
});
