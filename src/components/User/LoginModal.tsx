import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { showLoginModalAtom, showSignupModalAtom } from "../../store/authStore";

export default function LoginModal() {
    const [showLoginModal, setshowLoginModal] =
        useRecoilState(showLoginModalAtom);
    const [showsignupModal, setshowsignupModal] =
        useRecoilState(showSignupModalAtom);

    const onOpenModal = () => {
        setshowLoginModal(true);
    };
    const onCloseModal = () => {
        setshowLoginModal(false);
    };

    const switchToSignup = () => {
        setshowsignupModal(true);
        setshowLoginModal(false);
    };
    console.log("asdasdas");
    return (
        <Modal isOpen={showLoginModal} onClose={onCloseModal} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading fontSize={"4xl"} fontFamily={"mono"}>
                        Login💁‍♀️
                    </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack mx={"auto"} maxW={"lg"} py={10} px={6}>
                        <Stack align={"center"}>
                        </Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            // boxShadow={"lg"}
                            // p={8}
                        >
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <Stack py={10}>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            sm: "row",
                                        }}
                                        align={"start"}
                                        justify={"space-between"}
                                    >
                                        <Checkbox>Remember me</Checkbox>
                                        <Link color={"blue.400"}>
                                            Forgot password?
                                        </Link>
                                    </Stack>
                                    <Button
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Login
                                    </Button>
                                    <Link
                                        color={"blue.400"}
                                        textAlign="center"
                                        onClick={switchToSignup}
                                    >
                                        Create New Account
                                    </Link>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>

        //   </Flex>
    );
}
