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
} from "../../store/UtilStore";
import Expire from "../UI/Expire";

const ErrorModal= (props:any) => {
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);

    const onCloseHandler = () => {
        setshowErrorModal(false);
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
            setterFunction={setshowErrorModal}
            visibleProperty={showErrorModal}
        >
            <Modal isOpen={showErrorModal} onClose={onCloseHandler}>
                {/* <ModalOverlay /> */}
                <ModalContent maxW="45rem" bg="red.400" color="white">
                    <ModalHeader>
                       {props.children}
                    </ModalHeader>
                    <ModalCloseButton _focus={{ outline: "0" }} />
                </ModalContent>
            </Modal>
        </Expire>
    );
};

export default ErrorModal;
