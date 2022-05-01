import { atom } from "recoil";

export const adIdxState = atom({
    key: "adIdxState",
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
