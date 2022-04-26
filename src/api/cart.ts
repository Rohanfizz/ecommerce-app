import axios from "axios";
import { getRecoil } from "recoil-nexus";
import { userTokenAtom } from "../store/authStore";
import { AxiosAuth } from "./util";

const convertToBackendCart = (cart) => {
    const upCart = cart.map((product) => {
        return { product: product.productId, quantity: product.quantity };
    });
    return { products: upCart };
};

export const fetchInitialCart = async () => {
    let cart;
    try {
        cart = await axios.get(`${process.env.BACKEND_URL}api/v1/cart`, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        });
        return cart?.data?.data?.cart?.products;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const fetchCart = () => {
    return axios
        .get(`${process.env.BACKEND_URL}api/v1/cart`, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        });
};

export const createNewCart = (cart: any) => {
    const upCart = convertToBackendCart(cart);
    return axios
        .post(`${process.env.BACKEND_URL}api/v1/cart/create`, upCart)
        .then((res) => {
            return res;
        });
};

export const updateCart = (cart: any) => {
    const upCart = convertToBackendCart(cart);
    console.log(JSON.stringify(upCart));
    return axios
        .patch(`${process.env.BACKEND_URL}api/v1/cart/update`, upCart, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        });
    // return AxiosAuth.patch('/cart/update',upCart).then((res)=>res);
};
