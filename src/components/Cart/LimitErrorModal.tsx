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
import { limitErrorModalShowAtom } from "../../store/UtilStore";
import Expire from "../UI/Expire";

const LimitErrorModal = () => {
    const [limitErrorModal, setLimitErrorModal] = useRecoilState(
        limitErrorModalShowAtom
    );

    const onCloseHandler = () => {
        setLimitErrorModal(false);
    };
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setLimitErrorModal(false);
    //     }, 10);
    //     return clearInterval(timer);
    // }, [setLimitErrorModal]);

    
    return (
        <Expire delay={2000} setterFunction={setLimitErrorModal} visibleProperty={limitErrorModal}>
            <Modal isOpen={limitErrorModal} onClose={onCloseHandler} >
                {/* <ModalOverlay /> */}
                <ModalContent maxW="45rem" bg="red.300" color="white" >
                    <ModalHeader>
                        You already have the maximum quantity of this item in
                        your cart!
                    </ModalHeader>
                    <ModalCloseButton _focus={{outline:'0'}} />
                </ModalContent>
            </Modal>
        </Expire>
    );
};

export default LimitErrorModal;
