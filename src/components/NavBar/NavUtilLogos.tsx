import { Flex, Icon } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

import React from "react";

import NavbarCartLogo from "./NavbarCartLogo";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    isLoggedInSelector,
    showLoginModalAtom,
    showSignupModalAtom,
    showUserActionDropboxAtom,
} from "../../store/authStore";
import LoginModal from "../User/LoginModal";
import SignupModal from "../User/SignupModal";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.1)",
};

function NavUtilLogos() {
    const isLoggedIn = useRecoilValue(isLoggedInSelector);
    const [showLoginModal, setshowLoginModal] =
        useRecoilState(showLoginModalAtom);
    const [showUserActionDropbox, setshowUserActionDropbox] = useRecoilState(
        showUserActionDropboxAtom
    );
    const [showSignUpmodal,setshowSignupModal] = useRecoilState(showSignupModalAtom);

    const userIconClickHandler = () => {
        if (isLoggedIn) {
            setshowUserActionDropbox(true);
        } else {
            setshowLoginModal(true);
        }
    };

    return (
        <Flex
            // border="1px solid blue"
            h="90%"
            w="10%"
            fontSize={"2rem"}
            color="white"
            justifyContent={"space-around"}
            // flexDir={"column"}
            alignItems="center"
            // paddingRight="3rem"
        >
            <NavbarCartLogo />
            <Icon
                as={FaUser}
                _hover={hoverCss}
                onClick={userIconClickHandler}
            />
            {showLoginModal && <LoginModal/>}
            {showSignUpmodal && <SignupModal/>}
        </Flex>
    );
}

export default NavUtilLogos;
