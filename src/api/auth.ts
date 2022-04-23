import axios from "axios";

export const signUpReq = (
    firstName,
    lastName,
    email,
    password,
    passwordConfirm
) => {
    const data = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
    };
    // console.log(data,`${process.env.URL}api/v1/users/signup`);
    return axios
        .post(`${process.env.URL}api/v1/users/signup`, data)
        .then((res) => {
            // const result = res.json();
            console.log(res);
            return res;
        })
        // .catch((error) => {
        //     console.log(error.response.data);
        //     return error
        // });
};
