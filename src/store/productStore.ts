import { atom, selector } from "recoil";

export const productAtom = atom({
    // TODO: hard coded right now
    key: "productAtom",
    default: [] as any[],
});
export const fetchingProductsAtom = atom({
    key:"fetchingProductsAtom",
    default:false,
})

export const fetchinProductByIdAtom = atom({
    key: "fetchinProductByIdAtom",
    default: false,
});

export const totalProductsAtom = atom({
    key: "totalProductsAtom",
    default: 10,
});

export const pageNumberAtom = atom({
    key: "pageNumberAtom",
    default: 1,
});
export const limitResultsAtom = atom({
    key: "limitResultsAtom",
    default: 10,
});
export const sortByAtom = atom({
    key: "sortByAtom",
    default: "",
});
export const priceGTEAtom = atom({
    key: "priceGTEAtom",
    default: 0,
});
export const priceLTEAtom = atom({
    key: "priceLTEAtom",
    default: 99999,
});
export const categoryFilterAtom = atom({
    key:"categoryFilterAtom",
    default: ['Seasonal','Lipstick','Foundation','Perfume','Cream','Highlighter','Spray','Eyeliner'] as string[],
})