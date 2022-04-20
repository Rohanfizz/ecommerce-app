import { Button } from "@chakra-ui/react";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import useCart from "../../hooks/useCart";
import { limitErrorModalShowAtom } from "../../store/UtilStore";
import LimitErrorModal from "./LimitErrorModal";

const AddToCartButton: React.FC<{ product: any }> = ({ product }) => {
    const { editCartHandler } = useCart();

    const addToCartHandler = () => {
        editCartHandler(
            product.uuid,
            product.name,
            product.productImage[0],
            product.price,
            1
        );
    };

    return (
        <>
            <Button
                h="100%"
                fontSize="100%"
                leftIcon={<BsCartPlusFill />}
                onClick={addToCartHandler}
            >
                Add To Cart
            </Button>
        </>
    );
};

export default AddToCartButton;
