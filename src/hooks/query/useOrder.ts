import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { setRecoil } from "recoil-nexus";
import { placeOrder } from "../../api/order";
import {
    errorTextAtom,
    outOfStockItemsAtom,
    placeOrderAtom,
    showErrorModalAtom,
    wholeScreenLoadingAtom,
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
    const [outOfStockItems, setoutofStockItems] =
        useRecoilState(outOfStockItemsAtom);

    const router = useRouter();

    useQuery(
        "place-order",
        () => {
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
        },
        {
            enabled: placedOrder,
            retry: 0,
            onError: (err:any) => {
                setoutofStockItems(err?.response?.data?.data?.outOfStockItems);
                router.push("/order/failure");
            },
            onSuccess: (data) => {
                const orderId = data?.data?.data?._id;
                router.push(`/order/success/${orderId}`);
            },
            onSettled: (data) => {
                setplacedOrder(false);
                setRecoil(wholeScreenLoadingAtom,false);
            },
        }
    );

    return { showErrorModal, seterrorText, setshowErrorModal, setplacedOrder };
};
export default useOrder;
