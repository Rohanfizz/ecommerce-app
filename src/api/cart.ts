import axios from "axios";
import { getRecoil, setRecoil } from "recoil-nexus";
import Cart from "../Models/cartModel";
import { userTokenAtom } from "../store/authStore";
import { cartAtom } from "../store/CartStore";
import { AxiosAuth } from "./util";

export const convertToBackendCart = (products, subtotal) => {
    // console.log(products);
    const upCart = products.map((product) => {
        return { product: product.product._id, quantity: product.quantity };
    });
    const completeUpCart =  {products: upCart, subtotal };
    return completeUpCart;
};

export const fetchInitialCart = async () => {
    let cart: any;
    try {
        cart = await axios.get(`${process.env.BACKEND_URL}api/v1/cart`, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        });
        // console.log(cart?.data?.data?.cart);
        setRecoil(cartAtom, cart?.data?.data?.cart);
        return;
    } catch (err) {
        setRecoil(cartAtom, new Cart());
    }
};

export const fetchCart = () => {
    return axios
        .get(`${process.env.BACKEND_URL}api/v1/cart`, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err.response));
};

export const createNewCart = (cart, subtotal: Number) => {
    const upCart = convertToBackendCart(cart, subtotal);
    return axios
        .post(`${process.env.BACKEND_URL}api/v1/cart/create`, upCart, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err.response);
        });
};

export const updateCart = (cart: any, subtotal: Number) => {
    const upCart = convertToBackendCart(cart, subtotal);
    // console.log(JSON.stringify(upCart));
    return axios
        .patch(`${process.env.BACKEND_URL}api/v1/cart/update`, upCart, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err.response);
        });
    // return AxiosAuth.patch('/cart/update',upCart).then((res)=>res);
};
