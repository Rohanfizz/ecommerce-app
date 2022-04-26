import axios from "axios";
import { getRecoil } from "recoil-nexus";
import { userTokenAtom } from "../store/authStore";

// const userToken =
export const getUserToken = () => {
    return getRecoil(userTokenAtom);
};
export const AxiosAuth = axios.create({
    baseURL: `${process.env.BACKEND_URL}api/v1`,
    timeout: 2000,
    headers: { Authorization: "Bearer " + getUserToken() },
});

export const Axios = axios.create({
    baseURL: `${process.env.BACKEND_URL}api/v1`,
    timeout: 2000,
});
