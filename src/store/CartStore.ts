import { atom, selector } from "recoil";
import { fetchInitialCart } from "../api/cart";

export const initialCart = selector({
    key:"initialCart",
    get: async ({get})=>{
        return fetchInitialCart();
    }
})

export const cartAtom = atom({
    key: "cartAtom",
    default: initialCart,
});

export const subTotalCartSelector = selector({
    key: "subTotalCartState",
    get: ({ get }) => {
        const cart = get(cartAtom);
        let subtotal = 0;
        cart.forEach((item: any) => {
            subtotal += item.quantity * item.price;
        });
        return subtotal;
    },
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
