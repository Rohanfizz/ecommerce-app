import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    limitErrorModalShowAtom,
    showErrorModalAtom,
    showSuccessModalAtom,
} from "../../store/UtilStore";
import Expire from "../UI/Expire";

const SuccessModal = (props: any) => {
    const [showSuccessModal, setshowSuccessModal] =
        useRecoilState(showSuccessModalAtom);

    const onCloseHandler = () => {
        setshowSuccessModal(false);
    };
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setshowErrorModal(false);
    //     }, 10);
    //     return clearInterval(timer);
    // }, [setshowErrorModal]);
    return (
        <Expire
            delay={2000}
            setterFunction={setshowSuccessModal}
            visibleProperty={showSuccessModal}
        >
            <Modal isOpen={showSuccessModal} onClose={onCloseHandler}>
                {/* <ModalOverlay /> */}
                <ModalContent maxW="45rem" bg="green.400" color="white">
                    <ModalHeader>{props.children}</ModalHeader>
                    <ModalCloseButton _focus={{ outline: "0" }} />
                </ModalContent>
            </Modal>
        </Expire>
    );
};

export default SuccessModal;
