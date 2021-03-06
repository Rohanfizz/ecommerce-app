import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Stack,
    Select,
} from "@chakra-ui/react";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsPerson, BsMailbox } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import useForm from "../../hooks/useForm";
import validator from "validator";
import { setRecoil } from "recoil-nexus";
import { errorTextAtom, showErrorModalAtom, successTextAtom } from "../../store/UtilStore";
import { postMessage } from "../../api/message";

export default function ContactUsMain() {
    const {
        formValue: nameValue,
        valueOnChange: nameOnChange,
        valueOnBlur: nameOnBlur,
        isError: wrongName,
        isValid: validName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);
    const {
        formValue: emailValue,
        valueOnChange: emailOnChange,
        valueOnBlur: emailOnBlur,
        isError: wrongEmail,
        isValid: validEmail,
    } = useForm(validator.isEmail);

    const {
        formValue: issueValue,
        valueOnChange: issueOnChange,
        valueOnBlur: issueOnBlur,
        isError: wrongIssue,
        isValid: validIssue,
    } = useForm((s) => true);
    const {
        formValue: messageValue,
        valueOnChange: messageOnChange,
        valueOnBlur: messageOnBlur,
        isError: wrongMessage,
        isValid: validMessage,
    } = useForm((s) => s.length > 0);

    const submitHandler = async () => {
        const reqBody = {
            fullName: nameValue,
            email: emailValue,
            issue: issueValue,
            message: messageValue,
        };
        
        try {
            const message = await postMessage(reqBody);
            setRecoil(successTextAtom, "We've Got your message!");
            setRecoil(showErrorModalAtom,false);
            console.log(message);
        } catch {
            setRecoil(
                errorTextAtom,
                "There was a problem sending your message..."
            );
            setRecoil(showErrorModalAtom,true);
        }
    };

    return (
        <Container
            bg="blue.100"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
            h="100%"
        >
            <Flex>
                <Box
                    bg="blue.900"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact Us</Heading>
                                    <Text
                                        mt={{ sm: 3, md: 3, lg: 5 }}
                                        color="gray.500"
                                    >
                                        Fill up the form below to contact
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack
                                            pl={0}
                                            spacing={3}
                                            alignItems="flex-start"
                                        >
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: "2px solid #1C6FEB",
                                                }}
                                                leftIcon={
                                                    <MdPhone
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                +91-988888888
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: "2px solid #1C6FEB",
                                                }}
                                                leftIcon={
                                                    <MdEmail
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                hello@abc.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: "2px solid #1C6FEB",
                                                }}
                                                leftIcon={
                                                    <MdLocationOn
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                Delhi, India
                                            </Button>
                                        </VStack>
                                    </Box>

                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start"
                                    >
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: "#0D74FF" }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: "#0D74FF" }}
                                            icon={<BsGithub size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="discord"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: "#0D74FF" }}
                                            icon={<AiOutlineMail size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl
                                                id="name"
                                                isInvalid={wrongName}
                                            >
                                                <FormLabel>Your Name</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none">
                                                        <BsPerson color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input
                                                        value={nameValue}
                                                        onChange={nameOnChange}
                                                        onBlur={nameOnBlur}
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl
                                                id="name"
                                                isInvalid={wrongEmail}
                                            >
                                                <FormLabel>Mail</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement pointerEvents="none">
                                                        <MdOutlineEmail color="gray.800" />
                                                    </InputLeftElement>
                                                    <Input
                                                        value={emailValue}
                                                        onChange={emailOnChange}
                                                        onBlur={emailOnBlur}
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Issue</FormLabel>
                                                <Select
                                                    variant="outline"
                                                    placeholder="Select"
                                                    value={issueValue}
                                                    onChange={issueOnChange}
                                                    onBlur={issueOnBlur}
                                                    defaultValue="Business Related"
                                                >
                                                    <option value="Product Related">
                                                        Product Related
                                                    </option>
                                                    <option value="Order Related">
                                                        Order Related
                                                    </option>
                                                    <option value="Delivery Related">
                                                        Delivery Related
                                                    </option>
                                                    <option value="Business Related">
                                                        Business Related
                                                    </option>
                                                </Select>
                                            </FormControl>
                                            <FormControl
                                                id="name"
                                                isInvalid={wrongMessage}
                                            >
                                                <FormLabel>Message</FormLabel>
                                                <Textarea
                                                    value={messageValue}
                                                    onChange={messageOnChange}
                                                    onBlur={messageOnBlur}
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius:
                                                            "gray.300",
                                                    }}
                                                    placeholder="message"
                                                />
                                            </FormControl>

                                            <FormControl
                                                id="name"
                                                float="right"
                                            >
                                                <Button
                                                    variant="solid"
                                                    bg="#0D74FF"
                                                    color="white"
                                                    _hover={{}}
                                                    onClick={submitHandler}
                                                >
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
