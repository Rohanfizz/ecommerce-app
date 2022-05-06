import axios from "axios";
import { getRecoil } from "recoil-nexus";
import { ShipmentInfo } from "../Models/OrderModel";
import { userTokenAtom } from "../store/authStore";
import { convertToBackendCart } from "./cart";

export const placeOrder = (
    firstNameValue,
    lastNameValue,
    emailValue,
    zipcodeValue,
    addressValue,
    phoneValue,
    cart,
    deliveryCharge,
    tax,
    totalPrice,
    cityValue,
    paymentMethodValue
) => {
    const shipmentInfo = new ShipmentInfo();
    shipmentInfo.firstName = firstNameValue;
    shipmentInfo.lastName = lastNameValue;
    shipmentInfo.email = emailValue;
    shipmentInfo.phone = phoneValue;
    shipmentInfo.zipCode = zipcodeValue;
    shipmentInfo.city = cityValue;
    shipmentInfo.streetAddress = addressValue;
    // const orderStatus = "Placed";
    const paymentDone = false;
    const paymentMethod = paymentMethodValue;
    const newCart = convertToBackendCart(cart.products, cart.subtotal);

    const reqBody = {
        shipmentInfo,
        paymentDone,
        paymentMethod,
        cart: newCart,
        tax,
        deliveryCharge,
        totalPrice,
    };

    return axios
        .post(`${process.env.BACKEND_URL}api/v1/orders`, reqBody, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        });
};

export const fetchOrderById = async (oid: string) => {
    const orderData = await axios.get(
        `${process.env.BACKEND_URL}api/v1/orders/${oid}`
    );
    // console.log(orderData);
    return orderData;
};

export const getInvoice = async (oid: string) => {
    const pdfData = await axios
        .get(`${process.env.BACKEND_URL}api/v1/orders/invoice/${oid}`, {
            headers: {
                Authorization: "Bearer " + getRecoil(userTokenAtom),
                "Content-type": "application/pdf",
            },
            responseType: "arraybuffer",
            responseEncoding: "binary",
        })
        .then((res) => res)
        .catch((err) => {
            console.log(err.response);
        });
    // .then(function (response){
    //     const blob = new Blob([response.data.data])
    //     return blob;

    //   })
    //   return pdfData;

    return pdfData;
};

export const fetchUserOrders = async () => {
    const orderData = await axios
        .get(`${process.env.BACKEND_URL}api/v1/orders/`, {
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .catch((err) => {
            console.log(err.response);
        });
    console.log(orderData);
    return orderData;
};
