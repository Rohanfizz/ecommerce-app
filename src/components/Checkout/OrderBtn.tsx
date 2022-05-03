import { Button } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { setRecoil } from "recoil-nexus";
import useOrder from "../../hooks/query/useOrder";
import { errorTextAtom, showErrorModalAtom, wholeScreenLoadingAtom } from "../../store/UtilStore";

const btnCss = `

display: inline-block;
outline: 0;
border: 0;
background-image: linear-gradient(to right,#e052a0,#f15c41);
cursor: pointer;
border-radius: 2px;
color: #fff;
font-weight: 500;
text-align: center;
text-transform: uppercase;
height: 4rem;
line-height: 36px;
padding: 0 10px;
font-size: 1.7rem;


:hover {
    background-image: linear-gradient(to right,#3ec7e0,#526bf4);
}

`;

const OrderBtn = ({
    disabled,
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
    paymentMethodValue, 
}) => {
    const {  seterrorText, setshowErrorModal,setplacedOrder } = useOrder(
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
    );

    const orderHandler = () => {
        if (disabled === 1) {
            seterrorText("Your Cart is Empty!");
            setshowErrorModal(true);
            return;
        }
        if (disabled === 2) {
            seterrorText("Please fill all fields correctly!");
            setshowErrorModal(true);
            return;
        }
        setRecoil(wholeScreenLoadingAtom,true);
        setplacedOrder(true);
    };

    return (
        <>
            
            <Button css={btnCss} onClick={orderHandler} >
                Place Order
            </Button>
        </>
    );
};

export default OrderBtn;
