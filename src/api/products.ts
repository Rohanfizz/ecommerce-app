import axios from "axios";
import { getRecoil } from "recoil-nexus";
import {
    categoryFilterAtom,
    limitResultsAtom,
    pageNumberAtom,
    priceGTEAtom,
    priceLTEAtom,
    sortByAtom,
} from "../store/productStore";

export const fetchProducts = () => {
    const priceGTE = getRecoil(priceGTEAtom);
    const priceLTE = getRecoil(priceLTEAtom);
    const limit = getRecoil(limitResultsAtom);
    const page = getRecoil(pageNumberAtom);
    const sortBy = getRecoil(sortByAtom);
    const categoryString = getRecoil(categoryFilterAtom).join(",");
    return axios
        .get(
            // `${process.env.BACKEND_URL}api/v1/products`
            `${process.env.BACKEND_URL}api/v1/products?price[gte]=${priceGTE}&price[lte]=${priceLTE}&limit=${limit}&sort=${sortBy}&page=${page}&primaryCategory=${categoryString}`
        )
        .then((res) => {
            return res;
        });
};
export const fetchProductById = async (pid: string) => {
    const productData = await axios.get(
        `${process.env.BACKEND_URL}api/v1/products/${pid}`
    );
    return productData.data.data;
};
export const fetchSuggestions = async (term: string) => {
    const suggestionsData = await axios.post(
        `${process.env.BACKEND_URL}api/v1/products/search`,
        { term }
    );
    // console.log(suggestionsData.data.body.resArray);
    return suggestionsData?.data?.body?.resArray;
};
