import type { NextPage } from "next";
import FilterSortBar from "../src/components/Products/SortBox";
import FrontPageAd from "../src/components/Products/FrontPageAd";
import { AiFillWarning } from "react-icons/ai";
import ProductViewer from "../src/components/Products/ProductViewer";
import React, { useState } from "react";
import {
    Box,
    Button,
    Icon,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";

const RenderWarningModal = ({ showModal, closeModal }) => {
    return (
        <Box>
            {/* Modal */}
            <Modal
                isOpen={showModal}
                onClose={closeModal}
                isCentered
                motionPreset="slideInBottom"
                size={"xl"}
                zIndex={"100"}
            >
                <ModalOverlay
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                    bg="blackAlpha.300"
                    backdropInvert="80%"
                />
                <ModalContent fontFamily={"monospace"}>
                    <ModalHeader
                        color="black"
                        fontSize="3rem"
                        fontWeight="bold"
                        textAlign={"center"}
                    >
                        Ecommerce Website by Rohan Sharma🤎
                    </ModalHeader>

                    <Text
                        bg="red.200"
                        color="yellow"
                        fontSize={"1.5rem"}
                        textAlign={"center"}
                        paddingTop="0.5rem"
                        paddingBottom="0.5rem"
                    >
                        <Icon as={AiFillWarning} />
                        The backend API can take 1-2 mins to respond. Please
                        keep reloading if website doesn't load data!
                        <Icon as={AiFillWarning} />
                    </Text>
                    {/* Modal body with project description */}
                    <ModalBody fontSize={"1rem"}>
                        <p style={{ marginBottom: "1rem" }}>
                            A full-fledged MERN stack eCommerce application
                            which includes features for both buyers and sellers.
                            🛍️
                        </p>
                        <ul style={{ paddingLeft: "1.5rem" }}>
                            <li>
                                Order Placement with remaining stock alerts. ⚡
                            </li>
                            <li>
                                Tracking Orders for a seamless shopping
                                experience. 🚚
                            </li>
                            <li>
                                Seller Dashboard for easy order status updates.
                                📈
                            </li>
                            <li>
                                Dynamic products with features to manage stock
                                and edit product details. 📦
                            </li>
                            <li>
                                User Wishlist to keep track of favorite items.
                                ❤️
                            </li>
                            <li>Supports dynamic pagination. 📃</li>
                        </ul>
                    </ModalBody>

                    {/* Close button */}
                    <ModalFooter justifyContent="center">
                        <Button colorScheme="blue" onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

const Home: NextPage = () => {
    const [showModal, setshowModal] = useState(true);
    const closeModal = () => {
        setshowModal(false);
    };
    return (
        <Box w="100%" h="100%">
            {showModal && (
                <RenderWarningModal showModal closeModal={closeModal} />
            )}
            <FrontPageAd />
            <ProductViewer />
        </Box>
    );
};

export default Home;
