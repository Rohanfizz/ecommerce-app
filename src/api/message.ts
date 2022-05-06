import axios from "axios"

export const postMessage = async (message)=>{
    console.log(message);
    return await axios.post(`${process.env.BACKEND_URL}api/v1/message`,message);

}