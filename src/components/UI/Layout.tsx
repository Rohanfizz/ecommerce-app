import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Confetti from 'react-confetti'
import { useRecoilState, useRecoilValue } from "recoil";
import {
    confettiAtom,
    showErrorModalAtom,
    showSuccessModalAtom,
    wholeScreenLoadingAtom,
} from "../../store/UtilStore";
import BottomBar from "../NavBar/BottomBar";
import Navbar from "../NavBar/Navbar";
import ConfettiCustom from "./ConfettiCustom";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";
import WholeScreenModal from "./WholeScreenModal";

const Layout = (props: any) => {
    const [wholeScreenLoading, setwholeScreenLoading] = useRecoilState(
        wholeScreenLoadingAtom
    );
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
        const showConfetti = useRecoilValue(confettiAtom);
        const showSuccessModal = useRecoilValue(showSuccessModalAtom);
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            minH="100vh"
            w="100%"
            bgColor="back1"
        >
            {showConfetti && <ConfettiCustom/>}
            {wholeScreenLoading && (
                <WholeScreenModal
                    isOpen={wholeScreenLoading}
                    onClose={() => {
                        setwholeScreenLoading(false);
                    }}
                />
            )}
            {showErrorModal && <ErrorModal />}
            {showSuccessModal && <SuccessModal/>}
            <Navbar />
            <Box
                minH="calc( 100vh - 4.5rem - 6rem)"
                w="90vw"
                minW="90rem"
                // p="1rem"
                // border={'1px'}
                display='Flex'
                alignItems={'center'}
                justifyContent='center'
            >
                {props.children}
            </Box>
            <BottomBar />
        </Flex>
    );
};

export default Layout;
