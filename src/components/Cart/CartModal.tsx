import {
    Box,
    Button,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { cartAtom, cartOpenAtom } from "../../store/CartStore";
import CartContent from "./CartContent";

const cartItems = [
    {
        uuid: "1",
        productImage:
            "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        quantity: 4,
        price: 1234,
    },
    {
        uuid: "2",
        productImage:
            "https://m.media-amazon.com/images/I/61Df6Ww6DaL._SL1080_.jpg",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        quantity: 3,
        price: 1234,
    },
    {
        uuid: "3",
        productImage:
            "https://m.media-amazon.com/images/I/91sPs0ELPnL._SL1500_.jpg",
        name: "GTX 1050Ti Colorful",
        quantity: 5,
        price: 1234,
    },
    {
        uuid: "4",
        productImage:
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        quantity: 6,
        price: 1234,
    },
    {
        uuid: "5",
        productImage:
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        quantity: 6,
        price: 1234,
    },
];

const CartModal: React.FC = () => {
    const [cart, setCart] = useRecoilState(cartAtom);
    const [cartIsOpen, setCartIsOpen] = useRecoilState(cartOpenAtom);

    useEffect(() => {
        setCart(cartItems);
    }, []);
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Modal
                isOpen={cartIsOpen}
                onClose={() => {
                    setCartIsOpen(false);
                }}
                isCentered
                scrollBehavior={"inside"}
            >
                <ModalOverlay />
                <ModalContent h="45rem">
                    <ModalHeader borderBottom="1px solid skyblue">
                        {process.env.ENVIRONMENT}
                        {/* Your Cart */}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody borderBottom="1px solid skyblue">
                        <CartContent items={cart} />
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            mr={3}
                            variant="solid"
                            onClick={() => setCartIsOpen(false)}
                        >
                            Close
                        </Button>
                        <Button colorScheme="blue">Checkout</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CartModal;