import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stack,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { setRecoil } from "recoil-nexus";
import { addStockToProduct } from "../../api/products";
import useForm from "../../hooks/useForm";
import { showError, showSuccess } from "../../util";

const AddStockModal = ({ isOpen, onClose, id,setfetchingProduct }) => {
    const [val, setVal] = useState<number>(10);

    const { refetch } = useQuery(
        "add-stock",
        () => addStockToProduct(id, val),
        {
            enabled: false,
            onError: (err) => {
                showError(`There was a problem updating stock🙅‍♂️`);
            },
            onSuccess: (data) => {
                // Current stock is: ${data.data.body.product.stock}
                showSuccess(
                    `Successfully updated Stock👌`
                );
                setfetchingProduct(true)
            },
        }
    );

    const onChangeHandler = (e) => {
        setVal(parseInt(e));
    };
    const onSubmitHandler = () => {
        refetch();

    };
    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add stock</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <Text>Enter the amount of stock.</Text>
                            <NumberInput
                                min={-100}
                                max={1000}
                                value={val}
                                onChange={onChangeHandler}
                            >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                        <Button colorScheme="blue" onClick={onSubmitHandler}>
                            Add Stock
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddStockModal;
