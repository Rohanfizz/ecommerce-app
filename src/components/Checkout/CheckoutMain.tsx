import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import useForm from "../../hooks/useForm";
import AddressFormMain from "./AddressFormMain";
import BillMain from "./BillMain";
import PaymentMethodMain from "./PaymentMethodMain";
import validator from "validator";
import useOrder from "../../hooks/query/useOrder";

const CheckoutMain = () => {
    const {
        formValue: firstNameValue,
        valueOnChange: firstNameOnChange,
        valueOnBlur: firstNameOnBlur,
        isError: wrongFirstName,
        isValid: validFirstName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);

    const {
        formValue: lastNameValue,
        valueOnChange: lastNameOnChange,
        valueOnBlur: lastNameOnBlur,
        isError: wrongLastName,
        isValid: validLastName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);

    const {
        formValue: emailValue,
        valueOnChange: emailOnChange,
        valueOnBlur: emailOnBlur,
        isError: wrongEmail,
        isValid: validEmail,
    } = useForm(validator.isEmail);

    const {
        formValue: zipcodeValue,
        valueOnChange: zipcodeOnChange,
        valueOnBlur: zipcodeOnBlur,
        isError: wrongZipcode,
        isValid: validZipcode,
    } = useForm((s: string) => {
        // let regex = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
        // return regex.test(s);
        return s.length > 0;
    });

    const {
        formValue: addressValue,
        valueOnChange: addressOnChange,
        valueOnBlur: addressOnBlur,
        isError: wrongAddress,
        isValid: validAddress,
    } = useForm((s: string) => {
        return s.length > 0;
    });
    const {
        formValue: phoneValue,
        valueOnChange: phoneOnChange,
        valueOnBlur: phoneOnBlur,
        isError: wrongPhone,
        isValid: validPhone,
    } = useForm((s: string) => {
        return s.length == 10;
    });

    const {
        formValue: cityValue,
        valueOnChange: cityOnChange,
        valueOnBlur: cityOnBlur,
        isError: wrongCity,
        isValid: validCity,
    } = useForm((s: string) => s === "Delhi");

    const {
        formValue: paymentMethodValue,
        valueOnChange: paymentMethodOnChange,
        valueOnBlur: paymentMethodOnBlur,
    } = useForm((s: string) => true);

    return (
        // <Box  display='flex'
        //  alignItems='center' justifyContent={'center'}
        //  w="60%"
        //  border='1px'
        // >
        <Flex justifyContent={"center"}>
            <Grid
                minH="45rem"
                w="70%"
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={3} colSpan={3}>
                    <AddressFormMain
                        firstNameValue={firstNameValue}
                        firstNameOnChange={firstNameOnChange}
                        firstNameOnBlur={firstNameOnBlur}
                        wrongFirstName={wrongFirstName}
                        lastNameValue={lastNameValue}
                        lastNameOnChange={lastNameOnChange}
                        lastNameOnBlur={lastNameOnBlur}
                        wrongLastName={wrongLastName}
                        emailValue={emailValue}
                        emailOnChange={emailOnChange}
                        emailOnBlur={emailOnBlur}
                        wrongEmail={wrongEmail}
                        zipcodeValue={zipcodeValue}
                        zipcodeOnChange={zipcodeOnChange}
                        zipcodeOnBlur={zipcodeOnBlur}
                        wrongZipcode={wrongZipcode}
                        addressValue={addressValue}
                        addressOnChange={addressOnChange}
                        addressOnBlur={addressOnBlur}
                        wrongAddress={wrongAddress}
                        phoneValue={phoneValue}
                        phoneOnChange={phoneOnChange}
                        phoneOnBlur={phoneOnBlur}
                        wrongPhone={wrongPhone}
                        cityValue={cityValue}
                        cityOnChange={cityOnChange}
                        cityOnBlur={cityOnBlur}
                        wrongCity={wrongCity}
                    />
                </GridItem>
                <GridItem rowSpan={5} colSpan={2}>
                    <BillMain
                        firstNameValue={firstNameValue}
                        lastNameValue={lastNameValue}
                        emailValue={emailValue}
                        zipcodeValue={zipcodeValue}
                        addressValue={addressValue}
                        phoneValue={phoneValue}
                        cityValue={cityValue}
                        paymentMethodValue={paymentMethodValue}
                        disabled={
                            !(
                                validFirstName &&
                                validLastName &&
                                validEmail &&
                                validZipcode &&
                                validAddress &&
                                validPhone &&
                                validCity
                            )
                        }
                    />
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <PaymentMethodMain
                        paymentMethodValue={paymentMethodValue}
                        paymentMethodOnChange={paymentMethodOnChange}
                    />
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default CheckoutMain;
