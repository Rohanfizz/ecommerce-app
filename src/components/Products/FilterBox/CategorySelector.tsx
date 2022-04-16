import { Checkbox, Stack, Text } from "@chakra-ui/react";
import React from "react";

function CategorySelector(props:any) {
    return (
        <>
            <Text fontSize={"md"} fontFamily="mono" marginTop="0.5rem">
                Category
            </Text>
            <Stack direction={"column"} marginLeft="1rem">
                {props.categories.map((category, idx) => (
                    <Checkbox key={idx} defaultChecked>
                        {category}
                    </Checkbox>
                ))}
            </Stack>
        </>
    );
}

export default CategorySelector;
