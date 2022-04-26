import { Box, Flex, Icon, IconButton } from "@chakra-ui/react";
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
import UserMenu from "../User/UserMenu";
import { on } from "events";

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
    const [showSignUpmodal, setshowSignupModal] =
        useRecoilState(showSignupModalAtom);

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
            {!isLoggedIn && (
                // <Box border="1px">
                //     <Icon
                //         as={FaUser}
                //         _hover={hoverCss}
                //         onClick={userIconClickHandler}
                //     />
                // </Box>
                <IconButton
                    aria-label="user-icon"
                    icon={
                        <Icon
                            as={FaUser}
                            _hover={hoverCss}
                            onClick={userIconClickHandler}
                        />
                    }
                    // variant={'outline'}
                    fontSize="1.6rem"
                    colorScheme="teal.100"
                />
            )}

            {showLoginModal && !isLoggedIn && <LoginModal />}
            {showSignUpmodal && !isLoggedIn && <SignupModal />}
            {isLoggedIn && <UserMenu onClick={userIconClickHandler} />}
        </Flex>
    );
}

export default NavUtilLogos;
