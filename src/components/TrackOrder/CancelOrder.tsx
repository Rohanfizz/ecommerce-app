import { Button, Flex, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const updateCartButtonCss = `
display: flex;
align-items: center;
justify-content:center;
outline: 0;
cursor: pointer;
border-radius: 6px;
border: 2px solid #ff4742;
color: #fff;
padding: 8px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
// width:4rem;

font-size: 1.7rem;
height: 4rem;
:hover{
    background: #48BB78;
    color: white;
}
`;

const someCss = {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    bg: "white",
    // color: "gray.100",
    borderRadius: "0.2rem",
    w: "100%",
    h: "100%",
    textAlign: "center",
    fontFamily: "verdana",
    p: 2,
    boxShadow: ` rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`,
};

const CancelOrder = ({ oid }) => {
    return (
        <Flex sx={someCss}>
            <VStack textAlign={"start"} p="3">
                <Text w="100%" fontSize={"2rem"} fontFamily="mono">
                    Order Actions
                </Text>
                <Text w="100%" fontSize={"1rem"} fontFamily="mono" color="red">
                    *Order can be cancelled only before item has been dispatched
                </Text>
                <Flex
                    w="100%"
                    h="10rem"
                    alignItems={"center"}
                    justifyContent="center"
                >
                    <Button
                        bg="black"
                        css={updateCartButtonCss}
                        leftIcon={<Icon as={AiOutlineClose} />}
                    >
                        Cancel Order
                    </Button>
                </Flex>
            </VStack>
        </Flex>
    );
};

export default CancelOrder;
