import axios from "axios";

export const validateUser =async (token:string)=>{
    try{
        const data = await axios.get(`${process.env.BACKEND_URL}api/v1/users/validate`,{
            headers: { Authorization: "Bearer " + token },
        });
        return data?.data;

    }catch(err){
        return null;
    }
} 


export const signUpReq = (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirm: string
) => {
    const data = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
    };
    // console.log(data, `${process.env.BACKEND_URL}api/v1/users/signup`);
    return axios
        .post(`${process.env.BACKEND_URL}api/v1/users/signup`, data, {
            // validateStatus: (status) => true,
        })
        .then((res) => {
            return res;
        });
};

export const loginReq = (email: string, password: string) => {
    const data = {
        email,
        password,
    };
    // console.log(data, `${process.env.BACKEND_URL}api/v1/users/login`);
    return axios
        .post(`${process.env.BACKEND_URL}api/v1/users/login`, data, {
            // validateStatus: (status) => true,
        })
        .then((res) => {
            return res;
        });
};
