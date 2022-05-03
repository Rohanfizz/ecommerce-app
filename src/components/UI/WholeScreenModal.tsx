import {
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Spinner,
} from "@chakra-ui/react";
import React from "react";

const WholeScreenModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            closeOnOverlayClick={false}
        >
            <ModalOverlay />
            <ModalContent
                maxW="45rem"
                bg="transparent"
                color="white"
                boxShadow={"none"}
                textAlign={"center"}
                fontSize="10rem"
            >
                <ModalBody>
                    <Spinner size="xl" />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default WholeScreenModal;
