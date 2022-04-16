import { Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTag } from "react-icons/ai";
import { BsChat, BsFileText } from "react-icons/bs";

const displayFlexCommon = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const headingCss = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
};
const DescriptionSection: React.FC<{ product: any }> = ({ product }) => {
    return (
        <Flex h="100%" w="100%" boxShadow="xl" p="1" rounded="md" bg="white">
            <Grid
                h="100%"
                w="calc( 100% / 3)"
                templateRows="repeat(10, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
            >
                <GridItem
                    rowSpan={3}
                    colSpan={9}
                    borderBottom={"1px solid gray"}
                    borderLeft="2px solid gray"
                    borderRadius={"0.2rem"}
                    sx={headingCss}
                >
                    <Text paddingLeft="1rem" fontSize={"2rem"}>
                        Description
                    </Text>
                </GridItem>
                <GridItem rowSpan={5} colSpan={2} sx={displayFlexCommon}>
                    <Icon as={BsFileText} fontSize="5rem" />
                </GridItem>
                <GridItem rowSpan={8} colSpan={8}>
                    {product.description}
                </GridItem>
            </Grid>
            <Grid
                h="100%"
                w="calc( 100% / 3)"
                templateRows="repeat(10, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
            >
                <GridItem
                    rowSpan={3}
                    colSpan={9}
                    borderBottom={"1px solid gray"}
                    borderLeft="2px solid gray"
                    borderRadius={"0.2rem"}
                    sx={headingCss}
                >
                    <Text paddingLeft="1rem" fontSize={"2rem"}>
                        Benefits
                    </Text>
                </GridItem>
                <GridItem rowSpan={5} colSpan={2} sx={displayFlexCommon}>
                    <Icon as={AiOutlineTag} fontSize={"3rem"} />
                </GridItem>
                <GridItem rowSpan={8} colSpan={8}>
                    {product.benefits}
                </GridItem>
            </Grid>
            <Grid
                h="100%"
                w="calc( 100% / 3)"
                templateRows="repeat(10, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
            >
                <GridItem
                    rowSpan={3}
                    colSpan={9}
                    borderBottom="1px solid gray"
                    borderLeft="2px solid gray"
                    borderRadius={"0.2rem"}
                    sx={headingCss}
                >
                    <Text paddingLeft="1rem" fontSize={"2rem"}>
                        Suggested Use
                    </Text>
                </GridItem>
                <GridItem rowSpan={5} colSpan={2} sx={displayFlexCommon}>
                    <Icon as={BsChat} fontSize={"3rem"} />
                </GridItem>
                <GridItem rowSpan={8} colSpan={8}>
                    {product.suggestedUse}
                </GridItem>
            </Grid>
        </Flex>
    );
};

export default DescriptionSection;
