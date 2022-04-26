import { Button } from "@chakra-ui/react";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import useCart from "../../hooks/query/useCart";


const AddToCartButton: React.FC<{ product: any }> = ({ product }) => {
    const { editCartHandler } = useCart();
// console.log(product);
    const addToCartHandler = () => {
        editCartHandler(
            product._id,
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
