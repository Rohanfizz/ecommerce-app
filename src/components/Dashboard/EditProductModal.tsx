import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchProductById, fetchProductByIdAdmin, updateAdminProducts } from "../../api/products";
import { categories } from "../Products/FilterBox/FilterBox";

const EditProductModal = ({ isOpen, onClose, id }) => {
    const [data, setData] = useState<any>({});

    const productUpdater = async () => {
      const res = await updateAdminProducts(id,data);
    };

    useEffect(() => {
        const fetcher = async () => {
            setData(await fetchProductByIdAdmin(id));
            // setfetchingProduct(true)
        };
        fetcher();
    }, [id]);

    const nameOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, name: e.target.value };
        });
    };

    const primaryCategoryOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, primaryCategory: e.target.value };
        });
    };

    const priceOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, price: parseInt( e.target.value) };
        });
    };

    const originalPriceOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, originalPrice: parseInt(e.target.value) };
        });
    };

    const boughtPriceOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, boughtPrice: parseInt(e.target.value) };
        });
    };

    const taxOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, tax: parseInt(e.target.value) };
        });
    };

    const descriptionOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, description: e.target.value };
        });
    };

    const suggestedUseOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, suggestedUse: e.target.value };
        });
    };

    const benefitsOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, benefits: e.target.value };
        });
    };

    const infoOnChangeHandler = (e) => {
        setData(e.target.value);
    };

    const productImageOnChangeHandler = (e) => {
        setData((p) => {
            return { ...p, productImage: e.target.value.split(",") };
        });
    };
    console.log(data);
    return (
        <>
            <Modal
                onClose={onClose}
                size={"xl"}
                isOpen={isOpen}
                motionPreset="slideInBottom"
                scrollBehavior={"inside"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input
                                id="name"
                                type="text"
                                value={data?.name}
                                onChange={nameOnChangeHandler}
                            />

                            <FormLabel htmlFor="primaryCategory">
                                Primary Category
                            </FormLabel>
                            <Select
                                defaultValue={data?.primaryCategory}
                                onChange={primaryCategoryOnChangeHandler}
                            >
                                {categories.map((cat, idx) => {
                                    return (
                                        <option key={idx} value={cat}>
                                            {cat}
                                        </option>
                                    );
                                })}
                            </Select>
                            <HStack>
                                <Box w="50%">
                                    <FormLabel htmlFor="price">Price</FormLabel>
                                    <Input
                                        id="price"
                                        type="number"
                                        value={data?.price}
                                        onChange={priceOnChangeHandler}
                                    />
                                </Box>
                                <Box w="50%">
                                    <FormLabel htmlFor="originalprice">
                                        Original Price
                                    </FormLabel>
                                    <Input
                                        id="originalprice"
                                        type="number"
                                        value={data?.originalPrice}
                                        onChange={originalPriceOnChangeHandler}
                                    />
                                </Box>
                            </HStack>

                            <HStack>
                                <Box w="50%">
                                    <FormLabel htmlFor="boughtPrice">
                                        Bought Price
                                    </FormLabel>
                                    <Input
                                        id="boughtPrice"
                                        type="number"
                                        value={data?.boughtPrice}
                                        onChange={boughtPriceOnChangeHandler}
                                    />
                                </Box>
                                <Box w="50%">
                                    <FormLabel htmlFor="tax">Tax</FormLabel>
                                    <Input
                                        id="tax"
                                        type="number"
                                        value={data?.tax}
                                        onChange={taxOnChangeHandler}
                                    />
                                </Box>
                            </HStack>

                            <FormLabel htmlFor="description">
                                Description
                            </FormLabel>
                            <Input
                                id="description"
                                type="text"
                                value={data?.description}
                                onChange={descriptionOnChangeHandler}
                            />

                            <FormLabel htmlFor="suggestedUse">
                                Suggested Use
                            </FormLabel>
                            <Input
                                id="suggestedUse"
                                type="text"
                                value={data?.suggestedUse}
                                onChange={suggestedUseOnChangeHandler}
                            />

                            <FormLabel htmlFor="benefits">Benefits</FormLabel>
                            <Input
                                id="benefits"
                                type="text"
                                value={data?.benefits}
                                onChange={benefitsOnChangeHandler}
                            />

                            <FormLabel htmlFor="info">Info</FormLabel>
                            <Textarea
                                id="info"
                                value={(data?.info)}
                                onChange={infoOnChangeHandler}
                            />

                            <FormLabel htmlFor="productImages">
                                Images
                            </FormLabel>
                            <Textarea
                                id="productImage"
                                value={data?.productImage}
                                onChange={productImageOnChangeHandler}
                            />

                            <FormHelperText>
                                {`We'll never share your email.`}
                            </FormHelperText>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                        <Button colorScheme="blue" onClick={productUpdater}>
                            Update
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditProductModal;
