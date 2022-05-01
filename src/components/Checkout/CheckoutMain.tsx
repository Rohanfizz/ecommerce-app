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
        valueOnFocus: firstNameOnFocus,
        isError: wrongFirstName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);

    const {
        formValue: lastNameValue,
        valueOnChange: lastNameOnChange,
        valueOnFocus: lastNameOnFocus,
        isError: wrongLastName,
    } = useForm((s: string) => s.length > 0 && s.length <= 25);

    const {
        formValue: emailValue,
        valueOnChange: emailOnChange,
        valueOnFocus: emailOnFocus,
        isError: wrongEmail,
    } = useForm(validator.isEmail);

    const {
        formValue: zipcodeValue,
        valueOnChange: zipcodeOnChange,
        valueOnFocus: zipcodeOnFocus,
        isError: wrongZipcode,
    } = useForm((s: string) => {
        // let regex = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
        // return regex.test(s);
        return s.length > 0;
    });

    const {
        formValue: addressValue,
        valueOnChange: addressOnChange,
        valueOnFocus: addressOnFocus,
        isError: wrongAddress,
    } = useForm((s: string) => {
        return s.length > 0;
    });
    const {
        formValue: phoneValue,
        valueOnChange: phoneOnChange,
        valueOnFocus: phoneOnFocus,
        isError: wrongPhone,
    } = useForm((s: string) => {
        return s.length == 10;
    });

    const {
        formValue: cityValue,
        valueOnChange: cityOnChange,
        valueOnFocus: cityOnFocus,
    } = useForm((s: string) => true);

    const {
        formValue: paymentMethodValue,
        valueOnChange: paymentMethodOnChange,
        valueOnFocus: paymentMethodOnFocus,
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
                w="60%"
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={3} colSpan={3}>
                    <AddressFormMain
                        firstNameValue={firstNameValue}
                        firstNameOnChange={firstNameOnChange}
                        firstNameOnFocus={firstNameOnFocus}
                        wrongFirstName={wrongFirstName}
                        lastNameValue={lastNameValue}
                        lastNameOnChange={lastNameOnChange}
                        lastNameOnFocus={lastNameOnFocus}
                        wrongLastName={wrongLastName}
                        emailValue={emailValue}
                        emailOnChange={emailOnChange}
                        emailOnFocus={emailOnFocus}
                        wrongEmail={wrongEmail}
                        zipcodeValue={zipcodeValue}
                        zipcodeOnChange={zipcodeOnChange}
                        zipcodeOnFocus={zipcodeOnFocus}
                        wrongZipcode={wrongZipcode}
                        addressValue={addressValue}
                        addressOnChange={addressOnChange}
                        addressOnFocus={addressOnFocus}
                        wrongAddress={wrongAddress}
                        phoneValue={phoneValue}
                        phoneOnChange={phoneOnChange}
                        phoneOnFocus={phoneOnFocus}
                        wrongPhone={wrongPhone}
                        cityValue={cityValue}
                        cityOnChange={cityOnChange}
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
