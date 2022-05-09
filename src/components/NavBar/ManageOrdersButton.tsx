import { Button, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

const ManageOrdersButton = () => {
    const router = useRouter();
    const goToDashboard = ()=>{
        router.push('/dashboard');
    }

    return (
        <>
            <Button
                aria-label="Edit product"
                leftIcon={<AiOutlineDashboard />}
                fontSize="2rem"
                color="yellow"
                // colorScheme={"cyan"}
                bg="green.600"
                _hover={{
                    bg:"blue.700"
                }}
                h="70%"
                borderRadius={'0.2rem'}
                onClick={goToDashboard}
            >
                <Text fontSize={'1rem'}>Dashboard</Text>
            </Button>
        </>
    );
};

export default ManageOrdersButton;
