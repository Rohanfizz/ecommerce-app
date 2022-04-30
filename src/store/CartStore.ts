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
