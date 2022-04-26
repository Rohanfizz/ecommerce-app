import {
    Button,
    Flex,
    Grid,
    GridItem,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useRecoilState } from "recoil";
import useCart from "../../hooks/query/useCart";
import { cartOpenAtom } from "../../store/CartStore";

const optionButtons = {
    // border: "1px",
    w: "100%",
    h: "50%",
    variant: "link",
    _focus: { outline: "none" },
};

const CartItem: React.FC<{ product: any }> = ({ product }) => {
    const { editCartHandler, deleteFromCartHandler } = useCart();
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpenAtom);
    const router = useRouter();
    const addToCartHandler = (e: any) => {
        if (e.target.disabled) return;
        editCartHandler(
            product.productId,
            product.name,
            product.productImage[0],
            product.price,
            1
        );
    };
    const subtractFromCartHandler = (e: any) => {
        console.log("asdas");
        editCartHandler(
            product.productId,
            product.name,
            product.productImage[0],
            product.price,
            -1
        );
    };

    const removeCartHandler = () => {
        deleteFromCartHandler(product.productId);
    };

    const viewClickHandler = () => {
        setCartIsOpen(false);
        router.push(`/product/${product.productId}`);
    };

    return (
        <Grid
            // h='10rem'
            maxH="12rem"
            w="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={1}
            borderBottom="1px solid pink"
            paddingBottom="0.2rem"
            // border='1px'
            mb="0.5rem"
        >
            <GridItem rowSpan={2} colSpan={2}>
                <Image
                    alt={"product image"}
                    src={product.productImage}
                    // objectFit="inherit"
                    objectFit="scale-down"
                    h="100%"
                    w="100%"
                />
            </GridItem>
            <GridItem colSpan={3} p="1" fontWeight={"410"}>
                <Text>{product.name}</Text>
            </GridItem>
            <GridItem colSpan={2} rowSpan={2}>
                <Button
                    sx={optionButtons}
                    leftIcon={<GrView />}
                    variant="outline"
                    onClick={viewClickHandler}
                >
                    View
                </Button>
                <Button
                    sx={optionButtons}
                    leftIcon={<AiOutlineDelete />}
                    variant="outline"
                    onClick={removeCartHandler}
                >
                    Delete
                </Button>
            </GridItem>
            <GridItem
                colSpan={1}
                rowSpan={2}
                textAlign={"center"}
                borderRadius="5%"
                border="1px solid #e6ebf2"
            >
                <Text h="25%" paddingTop="0.5rem">
                    Quantity
                </Text>
                <Flex
                    alignItems={"center"}
                    justifyContent="center"
                    h="75%"
                    w="100%"
                >
                    <NumberInput
                        defaultValue={product.quantity}
                        w="90%"
                        min={1}
                        max={20}
                        value={product.quantity}
                    >
                        <NumberInputField readOnly />
                        <NumberInputStepper>
                            <NumberIncrementStepper
                                onClick={addToCartHandler}
                                as="button"
                            />
                            <NumberDecrementStepper
                                onClick={subtractFromCartHandler}
                                as="button"
                            />
                        </NumberInputStepper>
                    </NumberInput>
                </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2} textAlign="center">
                <Text fontSize="1rem">
                    {"Price: "}
                    <Text as="i" fontSize="2xl">
                        {"₹"}
                        {product.price * product.quantity}
                    </Text>
                    {"/-"}
                </Text>
            </GridItem>
        </Grid>
    );
};

export default CartItem;
