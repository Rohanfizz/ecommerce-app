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
    FormErrorMessage,
} from "@chakra-ui/react";
import {useQuery} from 'react-query';
import { useRecoilState } from "recoil";
import useForm from "../../hooks/useForm";
import { showLoginModalAtom, showSignupModalAtom } from "../../store/authStore";
import validator from "validator";

export default function LoginModal() {
    const [showLoginModal, setshowLoginModal] =
        useRecoilState(showLoginModalAtom);
    const [showsignupModal, setshowsignupModal] =
        useRecoilState(showSignupModalAtom);

    const {
        formValue: emailValue,
        valueOnChange: emailOnChange,
        valueOnFocus: emailOnFocus,
        isError: wrongEmail,
    } = useForm(validator.isEmail);

    const {
        formValue: passwordValue,
        valueOnChange: passwordOnChange,
        valueOnFocus: passwordOnFocus,
        isError: wrongPassword,
    } = useForm((s: string) => s.length >= 8);

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

    useQuery()

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
                        <Stack align={"center"}></Stack>
                        <Box
                            rounded={"lg"}
                            bg={useColorModeValue("white", "gray.700")}
                            // boxShadow={"lg"}
                            // p={8}
                        >
                            <Stack spacing={4}>
                                <FormControl
                                    id="email"
                                    isRequired
                                    isInvalid={wrongEmail}
                                >
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        type="email"
                                        value={emailValue}
                                        onChange={emailOnChange}
                                        onFocus={emailOnFocus}
                                    />
                                    <FormErrorMessage>
                                        Enter a valid Email Id
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl
                                    id="password"
                                    isRequired
                                    isInvalid={wrongPassword}
                                >
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type={"password"}
                                        value={passwordValue}
                                        onChange={passwordOnChange}
                                        onFocus={passwordOnFocus}
                                    />
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
