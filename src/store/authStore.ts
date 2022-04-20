import { atom, selector } from "recoil";

export const userTokenAtom = atom({
    key: "userToken",
    default: null,
});
