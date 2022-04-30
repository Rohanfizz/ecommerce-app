import { atom, selector } from "recoil";

export const productAtom = atom({
    // TODO: hard coded right now
    key: "productAtom",
    default: [] as any[],
});

export const fetchinProductByIdAtom = atom({
    key:"fetchinProductByIdAtom",
    default:false
})
