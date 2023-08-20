import { atom } from "recoil";
import { OutOfStockItem } from "../Models/OrderModel";

export const adIdxState = atom({
    key: "adIdx",
    default: 0,
});

export const limitErrorModalShowAtom = atom({
    key: "limitErrorModalShowAtom",
    default: false,
});

export const showErrorModalAtom = atom({
    key: "showErrorModalAtom",
    default: false,
});

export const showSuccessModalAtom = atom({
    key: "showSuccessModalAtom",
    default: false,
});

export const errorTextAtom = atom({
    key: "errorText",
    default: "",
});
export const successTextAtom = atom({
    key: "successText",
    default: "",
});
export const placeOrderAtom = atom({
    key: "placeOrderAtom",
    default: false,
});
export const outOfStockItemsAtom = atom<OutOfStockItem[]>({
    key: "outOfStockItemsAtom",
    default: [],
});
export const wholeScreenLoadingAtom = atom({
    key: "wholeScreenLoadingAtom",
    default: false
});

export const confettiAtom = atom({
    key:"confettiAtom",
    default: false,
})
