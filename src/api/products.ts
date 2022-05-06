import axios from "axios";

export const fetchProducts = () => {
    return axios
        .get(`${process.env.BACKEND_URL}api/v1/products/`)
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
