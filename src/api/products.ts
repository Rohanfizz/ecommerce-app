import axios from "axios";
import { getRecoil, setRecoil } from "recoil-nexus";
import { userTokenAtom } from "../store/authStore";
import {
    categoryFilterAtom,
    limitResultsAtom,
    pageNumberAtom,
    priceGTEAtom,
    priceLTEAtom,
    sortByAtom,
} from "../store/productStore";
import {
    errorTextAtom,
    showErrorModalAtom,
    showSuccessModalAtom,
    successTextAtom,
} from "../store/UtilStore";

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
            `${process.env.BACKEND_URL}api/v1/products?active=true&price[gte]=${priceGTE}&price[lte]=${priceLTE}&limit=${limit}&sort=${sortBy}&page=${page}&primaryCategory=${categoryString}`
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

export const fetchProductByIdAdmin = async (pid: string) => {
    const productData = await axios.get(
        `${process.env.BACKEND_URL}api/v1/products/${pid}?fields=name,primaryCategory,price,originalPrice,boughtPrice,tax,description,suggestedUse,benefits,info,productImage`
    );
    console.log(productData.data.data.data);
    productData.data.data.data.info = JSON.stringify(
        productData.data.data.data.info
    );
    return productData.data.data.data;
};
export const fetchSuggestions = async (term: string) => {
    const suggestionsData = await axios.post(
        `${process.env.BACKEND_URL}api/v1/products/search`,
        { term }
    );
    // console.log(suggestionsData.data.body.resArray);
    return suggestionsData?.data?.body?.resArray;
};

export const fetchAdminProducts = (sorter: string, asc: boolean) => {
    console.log(
        sorter,
        asc,
        `${process.env.BACKEND_URL}api/v1/products/all?sort=${
            asc ? "-" : ""
        }${sorter}&fields=name,createdAt,price,stock,sold,ratingsNumber,boughtPrice`
    );
    return axios
        .get(
            `${process.env.BACKEND_URL}api/v1/products/all?sort=${
                asc ? "-" : ""
            }${sorter}&fields=active,name,createdAt,price,stock,sold,ratingNumber,boughtPrice`,
            {
                headers: {
                    Authorization: "Bearer " + getRecoil(userTokenAtom),
                },
            }
        )
        .then((res) => {
            console.log(res);
            return res;
        });
};

export const updateAdminProducts = async (pid: string, data: any) => {
    let sendData = { ...data };
    try {
        sendData.info = await JSON.parse(data.info);
    } catch(err) {
        console.log(err);
        setRecoil(
            errorTextAtom,
            "Please cross check if data is in the correct format!"
        );
        setRecoil(showErrorModalAtom, true);
        return;
    }
    const productData = await axios
        // console.log(sendData);
        .patch(`${process.env.BACKEND_URL}api/v1/products/${pid}`, sendData,{
            headers: {
                Authorization: "Bearer " + getRecoil(userTokenAtom),
            },
        })
        .then((res) => {
            setRecoil(successTextAtom, "Product Updated Successfully!");
            setRecoil(showSuccessModalAtom, true);
            return res;
        })
        .catch((err) => {
            // console.log(err.response);
            setRecoil(
                errorTextAtom,
                "Please cross check if data is in the correct format!"
            );
            setRecoil(showErrorModalAtom, true);
        });
    // console.log(productData.data.data.data);
    // productData.data.data.data.info = JSON.stringify(productData.data.data.data.info);
    return productData?.data?.data?.data;
};

export const addAdminProducts = async (data: any) => {
    let sendData = { ...data };
    try {
        sendData.info = await JSON.parse(data.info);
    } catch {
        setRecoil(
            errorTextAtom,
            "Please cross check if data is in the correct format!"
        );
        setRecoil(showErrorModalAtom, true);
        return;
    }
    const productData = await axios
        // console.log(sendData);
        .post(`${process.env.BACKEND_URL}api/v1/products/`, sendData,{
            headers: {
                Authorization: "Bearer " + getRecoil(userTokenAtom),
            },
        })
        .then((res) => {
            setRecoil(successTextAtom, "Product Added Successfully!");
            setRecoil(showSuccessModalAtom, true);
            return res;
        })
        .catch((err) => {
            // console.log(err.response);
            setRecoil(
                errorTextAtom,
                "Please cross check if data is in the correct format!"
            );
            setRecoil(showErrorModalAtom, true);
        });
    // console.log(productData.data.data.data);
    // productData.data.data.data.info = JSON.stringify(productData.data.data.data.info);
    return productData?.data?.data?.data;
};

export const addStockToProduct = async (pid: string, stock: number) => {
    console.log(pid, stock);
    return axios
        .patch(
            `${process.env.BACKEND_URL}api/v1/products/addStock/${pid}`,
            { stock },
            {
                headers: {
                    Authorization: "Bearer " + getRecoil(userTokenAtom),
                },
            }
        )
        .then((res) => res);
};

export const toggleProductIsActive = async (pid: string, active: boolean) => {
    console.log(active);
    const data = await axios.patch(
        `${process.env.BACKEND_URL}api/v1/products/toggleActive/${pid}`,
        { active },
        {
            headers: {
                Authorization: "Bearer " + getRecoil(userTokenAtom),
            },
        }
    );
    console.log(data);
};
