import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { subTotalCartSelector } from "../../store/CartStore";

const TotalViewer: React.FC<{ items: any }> = ({ items }) => {
    const subtotal = useRecoilValue(subTotalCartSelector);
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={0} w="100%" h="100%">
            <GridItem colSpan={2}></GridItem>
            <GridItem colSpan={1} w="100%" textAlign={"center"}>
                <Text fontSize={"2xl"} paddingTop="1rem">
                    Subtotal:
                </Text>
            </GridItem>
            <GridItem colSpan={2} w="100%" textAlign={"center"} paddingTop='0.2rem'>
                <Text fontSize="1rem">
                    <Text as="i" fontSize="4xl">
                        {"₹"}
                        {subtotal}
                    </Text>
                    {"/-"}
                </Text>
            </GridItem>
        </Grid>
    );
};

export default TotalViewer;
