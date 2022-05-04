import {
    Button,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { FaUser } from "react-icons/fa";
import useLogout from "../../hooks/query/useLogout";

const hoverCss = {
    cursor: "pointer",
    transform: "scale(1.1)",
};

const UserMenu = ({ onClick }) => {
    const { logoutFn } = useLogout();
    
    const router = useRouter();

    const sendToMyOrdersHandler = () => {
        router.push('/myOrders')
    }
    const sendToContactUs = ()=>{
        router.push('/contactUs');
    }

    return (
        <Menu>
            <MenuButton
                // display="flex"
                // alignItems={"center"}
                // justifyContent="center"
                // border='1px'
                as={IconButton}
                icon={<Icon as={FaUser} _hover={hoverCss} onClick={onClick} />}
                // variant={'outline'}
                fontSize="1.6rem"
                colorScheme="teal.100"
            />
            <MenuList color="gray.600" fontSize={"1rem"}>
                <MenuGroup title="Profile" color="black">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem onClick={sendToMyOrdersHandler}>My Orders </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help" color="black">
                    <MenuItem onClick={sendToMyOrdersHandler}>Track Order</MenuItem>
                    <MenuItem>Change Password</MenuItem>
                    <MenuItem onClick={sendToContactUs}>Contact Us</MenuItem>
                    <MenuItem onClick={logoutFn}>Log Out</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
