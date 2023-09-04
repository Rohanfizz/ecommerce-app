import {
    Box,
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
import { useRecoilState, useRecoilValue } from "recoil";
import {
    errorTextAtom,
    limitErrorModalShowAtom,
    showErrorModalAtom,
} from "../../store/UtilStore";
import Expire from "../UI/Expire";

const ErrorModal = (props: any) => {
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);

    const onCloseHandler = () => {
        setshowErrorModal(false);
    };
    const errorText = useRecoilValue(errorTextAtom);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setshowErrorModal(false);
    //     }, 100);
    //     return clearInterval(timer);
    // }, [setshowErrorModal]);
    return (
        <Expire
            delay={2000}
            setterFunction={setshowErrorModal}
            visibleProperty={showErrorModal}
        >
            <Box>
                <Modal isOpen={showErrorModal} onClose={onCloseHandler}>
                    {/* <ModalOverlay /> */}
                    <ModalContent maxW="45rem" bg="red.400" color="white">
                        <ModalHeader>{errorText}</ModalHeader>
                        <ModalCloseButton _focus={{ outline: "0" }} />
                    </ModalContent>
                </Modal>
            </Box>
        </Expire>
    );
};

export default ErrorModal;
