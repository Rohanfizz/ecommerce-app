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
    FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { useRecoilState } from "recoil";
import useForm from "../../hooks/useForm";
import {
    showLoginModalAtom,
    showSignupModalAtom,
    userTokenAtom,
} from "../../store/authStore";
import validator from "validator";
import { signUpReq } from "../../api/auth";
import { useQuery } from "react-query";
import { showErrorModalAtom } from "../../store/UtilStore";
import useSignup from "../../hooks/query/useSignup";

export default function SignupModal() {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoginModal, setshowLoginModal] =
        useRecoilState(showLoginModalAtom);
    const [showsignupModal, setshowsignupModal] =
        useRecoilState(showSignupModalAtom);
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);

    const {
        formValue: firstNameValue,
        valueOnChange: firstNameOnChange,
        valueOnBlur: firstNameOnBlur,
        isError: wrongFirstName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);

    const {
        formValue: lastNameValue,
        valueOnChange: lastNameOnChange,
        valueOnBlur: lastNameOnBlur,
        isError: wrongLastName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);

    const {
        formValue: emailValue,
        valueOnChange: emailOnChange,
        valueOnBlur: emailOnBlur,
        isError: wrongEmail,
    } = useForm(validator.isEmail);

    const {
        formValue: passwordValue,
        valueOnChange: passwordOnChange,
        valueOnBlur: passwordOnBlur,
        isError: wrongPassword,
    } = useForm((s: string) => s.length >= 8);

    const {
        formValue: passwordRepeatValue,
        valueOnChange: passwordRepeatOnChange,
        valueOnBlur: passwordRepeatOnBlur,
        isError: wrongPasswordRepeat,
    } = useForm((s: string) => s === passwordValue);

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

    const {onSubmitHandler} = useSignup(
        firstNameValue,
        lastNameValue,
        emailValue,
        passwordValue,
        passwordRepeatValue
    );

    return (
        <>
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
                        <Stack
                            spacing={8}
                            mx={"auto"}
                            maxW={"lg"}
                            py={1}
                            px={6}
                        >
                            <Box
                                rounded={"lg"}
                                bg={useColorModeValue("white", "gray.700")}
                                // boxShadow={"lg"}
                                p={1}
                            >
                                <Stack spacing={4}>
                                    <HStack>
                                        <Box>
                                            <FormControl
                                                id="firstName"
                                                isRequired
                                                isInvalid={wrongFirstName}
                                            >
                                                <FormLabel>
                                                    First Name
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    value={firstNameValue}
                                                    onChange={firstNameOnChange}
                                                    onBlur={firstNameOnBlur}
                                                />
                                            </FormControl>
                                        </Box>
                                        <Box>
                                            <FormControl
                                                id="lastName"
                                                isInvalid={wrongLastName}
                                            >
                                                <FormLabel>Last Name</FormLabel>
                                                <Input
                                                    type="text"
                                                    value={lastNameValue}
                                                    onChange={lastNameOnChange}
                                                    onBlur={lastNameOnBlur}
                                                />
                                            </FormControl>
                                        </Box>
                                    </HStack>
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
                                            onBlur={emailOnBlur}
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
                                        <InputGroup>
                                            <Input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={passwordValue}
                                                onChange={passwordOnChange}
                                                onBlur={passwordOnBlur}
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
                                    <FormControl
                                        id="password-repeat"
                                        isRequired
                                        isInvalid={wrongPasswordRepeat}
                                    >
                                        <FormLabel>Repeat Password</FormLabel>
                                        <InputGroup>
                                            <Input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                value={passwordRepeatValue}
                                                onChange={
                                                    passwordRepeatOnChange
                                                }
                                                onBlur={passwordRepeatOnBlur}
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
                                            onClick={onSubmitHandler}
                                        >
                                            Sign up
                                        </Button>
                                    </Stack>
                                    <Stack pt={6}>
                                        <Text align={"center"}>
                                            Already a user?{" "}
                                            <Link
                                                color={"blue.400"}
                                                onClick={switchToLogin}
                                            >
                                                Login
                                            </Link>
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
        //   </Flex>
    );
}
