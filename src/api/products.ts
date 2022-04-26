import axios from "axios"

export const fetchProducts = ()=>{
    return axios.get(`${process.env.BACKEND_URL}api/v1/products/`).then((res) => {
        return res;
    });
}