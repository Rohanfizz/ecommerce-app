import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
const ColorBox: React.FC<{ color: string }> = (props) => {
    return (
        <Box
            bg={props.color}
            w="2rem"
            h="2rem"
            border="1px solid gray"
            margin="0.1rem"
        />
    );
};
function ColorSelector(props: any) {
    return (
        <>
            <Text fontSize={"md"} fontFamily="mono" marginTop="0.5rem">
                Color
            </Text>
            <Flex wrap="wrap" paddingLeft={"1rem"} marginTop="0.5rem">
                {props.colors.map((color, idx) => (
                    <ColorBox color={color} key={idx} />
                ))}
            </Flex>
        </>
    );
}

export default ColorSelector;
