import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { placeOrder } from "../../api/order";
import {
    errorTextAtom,
    placeOrderAtom,
    showErrorModalAtom,
} from "../../store/UtilStore";

const useOrder = (
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
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [errorText, seterrorText] = useRecoilState(errorTextAtom);
    const [placedOrder, setplacedOrder] = useRecoilState(placeOrderAtom);
    const router = useRouter();

    useQuery("place-order", () => {
        return placeOrder(
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
    },{
        enabled: placedOrder,
        retry: 0,
        onSettled: (data) => {
            setplacedOrder(false);
        },
    });

    return { showErrorModal, seterrorText, setshowErrorModal ,setplacedOrder};
};
export default useOrder;
