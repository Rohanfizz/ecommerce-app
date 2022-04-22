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
    Text,
    HStack,
    InputGroup,
    InputRightElement,
    Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { useRecoilState } from "recoil";
import { showLoginModalAtom, showSignupModalAtom } from "../../store/authStore";

export default function SignupModal() {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoginModal, setshowLoginModal] =
        useRecoilState(showLoginModalAtom);
    const [showsignupModal, setshowsignupModal] =
        useRecoilState(showSignupModalAtom);

    const onOpenModal = () => {
        setshowsignupModal(true);
    };
    const onCloseModal = () => {
        setshowsignupModal(false);
    };

    const switchToLogin = () => {
        setshowLoginModal(true);
        setshowsignupModal(false);
    };

    return (
        <Modal isOpen={showsignupModal} onClose={onCloseModal} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading fontSize={"4xl"} fontFamily={"mono"}>
                        Signup🙋‍♂️
                    </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={1} px={6}>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            // boxShadow={"lg"}
                            p={8}
                        >
                            <Stack spacing={4}>
                                <HStack>
                                    <Box>
                                        <FormControl id="firstName" isRequired>
                                            <FormLabel>First Name</FormLabel>
                                            <Input type="text" />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="lastName">
                                            <FormLabel>Last Name</FormLabel>
                                            <Input type="text" />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />
                                        <InputRightElement h={"full"}>
                                            <Button
                                                variant={"ghost"}
                                                onClick={() =>
                                                    setShowPassword(
                                                        (showPassword) =>
                                                            !showPassword
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <Icon
                                                        as={GrFormView}
                                                        fontSize="2rem"
                                                    />
                                                ) : (
                                                    <Icon
                                                        as={GrFormViewHide}
                                                        fontSize="2rem"
                                                    />
                                                )}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </Stack>
                                <Stack pt={6}>
                                    <Text align={"center"}>
                                        Already a user?{" "}
                                        <Link color={"blue.400"} onClick={switchToLogin}>Login</Link>
                                    </Text>
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
