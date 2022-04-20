import { atom, selector } from "recoil";

export const cartAtom = atom({
    key: "cartAtom",
    default: [] as any[],
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
