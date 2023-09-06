import { Flex } from "@chakra-ui/react";
import React from "react";
import ContactUsMain from "../../src/components/Util/ContactUsMain";

const ContactUsPage = () => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            h="100%"
            w="70%"
            // border="1px"
        >
            <ContactUsMain />
        </Flex>
    );
};

export default ContactUsPage;
