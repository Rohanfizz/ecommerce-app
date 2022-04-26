import axios from "axios";

const convertToBackendCart = (cart) => {
    const upCart =  cart.map((product) => {
        return { product: product._id, quantity: product.quantity };
    });
    return {products:upCart};
};
export const fetchCart = () => {
    return axios.get(`${process.env.BACKEND_URL}api/v1/cart/`).then((res) => {
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

export const updateCart = (cart) => {
    const upCart = convertToBackendCart(cart);
    console.log(upCart);
    return axios
        .patch(`${process.env.BACKEND_URL}api/v1/cart/update`, upCart)
        .then((res) => {
            return res;
        });
};
