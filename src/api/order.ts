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
    const orderStatus = "placed";
    const paymentDone = false;
    const paymentMethod = paymentMethodValue;
    const newCart = convertToBackendCart(cart.products, cart.subtotal);

    const reqBody = {
        shipmentInfo,
        orderStatus,
        paymentDone,
        paymentMethod,
        cart: newCart,
        tax,
        deliveryCharge,
        totalPrice,
    };


    return axios
        .post(`${process.env.BACKEND_URL}api/v1/orders`, reqBody,{
            headers: { Authorization: "Bearer " + getRecoil(userTokenAtom) },
        })
        .then((res) => {
            return res;
        })
};
