import { Button } from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import useOrder from "../../hooks/query/useOrder";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";
import ErrorModal from "../UI/ErrorModal";

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
    const { showErrorModal, seterrorText, setshowErrorModal,setplacedOrder } = useOrder(
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
        if (disabled) {
            seterrorText("Your Cart is Empty!");
            setshowErrorModal(true);
            return;
        }
        setplacedOrder(true);
    };

    return (
        <>
            {showErrorModal && <ErrorModal />}
            <Button css={btnCss} onClick={orderHandler}>
                Place Order
            </Button>
        </>
    );
};

export default OrderBtn;
