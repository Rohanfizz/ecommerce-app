import { Box, useRadio } from "@chakra-ui/react";

const styleCss = {
    display: " inline-block",
    outline: 0,
    cursor: "pointer",
    border: "none",
    padding: "0 56px",
    height: "45px",
    lineHeight: "45px",
    borderRadius: "7px",

    fontWeight: 400,
    fontSize: "16px",
    boxShadow: "0 4px 14px 0 rgb(0 118 255 / 39%)",
    transition: "background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease",
    _checked: {
        backgroundColor: "#0070f3",
        color: "white",
    },
    _hover: {
        background: " rgba(0,118,255,0.9)",
        boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
    },
};

export default function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                //   cursor='pointer'
                //   borderWidth='1px'
                //   borderRadius='md'
                //   boxShadow='md'
                _checked={{
                    backgroundColor: "#0070f3",
                    color: "white",
                }}
                //   _focus={{
                //     boxShadow: 'outline',
                //   }}
                px={5}
                py={3}
                css={styleCss}
            >
                {props.children}
            </Box>
        </Box>
    );
}
