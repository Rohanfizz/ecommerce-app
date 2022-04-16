import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Grid,
    GridItem,
    Icon,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillShopping, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";

const displayFlexCommon = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const ProductVitals: React.FC<{ product: any }> = ({ product }) => {
    const ratingStars: any[] = [];
    for (let i = 1; i <= 5; i++) {
        if (product.ratingNumber >= i)
            ratingStars.push(<Icon as={AiFillStar} color="ratingStar" />);
        else ratingStars.push(<Icon as={AiOutlineStar} color="ratingStar" />);
    }
    return (
        <Grid
            h="100%"
            w="100%"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={0}
            borderRadius={"0.5rem"}
            boxShadow="xl"
            // p="6"
            paddingLeft='1rem'
            paddingRight='2rem'
            paddingTop='1rem'
            rounded="md"
            bg="white"
        >
            <GridItem
                rowSpan={4}
                colSpan={10}
                paddingLeft="0.7rem"
                paddingRight="0.7rem"
                sx={displayFlexCommon}
            >
                <Text fontSize={"3xl"}>{product.name}</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={6} >
                <Flex
                    alignItems={"center"}
                    h="100%"
                    w="100%"
                    paddingLeft="1rem"
                    // fontSize='1.05rem'
                >
                    {ratingStars}
                    {product.reviewCount}
                </Flex>
            </GridItem>
            <GridItem rowSpan={6} colSpan={4} sx={displayFlexCommon}>
                <ButtonGroup isAttached variant="solid" gap="0.2rem">
                    <Button
                        h="5rem"
                        leftIcon={<AiFillShopping />}
                        fontSize={"2xl"}
                    >
                        Buy Now
                    </Button>
                    <Button
                        h="5rem"
                        leftIcon={<BsCartPlusFill />}
                        fontSize={"2xl"}
                    >
                        Add To Cart
                    </Button>
                </ButtonGroup>
            </GridItem>
            <GridItem rowSpan={5} colSpan={6}>
                <Flex
                    color="red.800"
                    flexDir={"column"}
                    // alignItems={"center"}
                    justifyContent="center"
                    marginRight={"1rem"}
                    h="80%"
                    w="100%"
                    paddingLeft="1rem"
                    // gap="1rem"
                    // border='1px'
                >
                    <Text fontSize="1.5rem">
                        {"M.R.P: "}
                        <Text as="s">
                            {"₹"}
                            {product.originalPrice}
                        </Text>
                    </Text>
                    <Text fontSize="1.5rem">
                        {"Deal Price: "}
                        <Text as="i" fontSize="5xl">
                            {"₹"}
                            {product.price}
                        </Text>
                    </Text>
                </Flex>
                <Text paddingLeft="1rem" color='red.500'>
                    You Save{" "}
                    {`₹${product.originalPrice - product.price}  (${Math.round(
                        (product.price / product.originalPrice) * 100
                    )}%)`}
                </Text>
            </GridItem>
        </Grid>

        // <Box h='100%' w="100%">
        //     <Box textAlign={"left"} h="80%" border='1px'>
        //         <Text fontSize={"3xl"}>{product.name}</Text>

        // <Flex alignItems={"center"}>
        //     {ratingStars}
        //     {product.reviewCount}
        // </Flex>

        // <Flex
        //     color="red.800"
        //     alignItems={"center"}
        //     justifyContent="flex-start"
        //     marginRight={"1rem"}
        // >
        //     <Icon as={BiRupee} fontSize={"2xl"} />
        //     <Text fontSize="4xl">{product.price}</Text>
        // </Flex>
        //     </Box>
        // <Flex
        //     alignItems={"center"}
        //     justifyContent={"center"}
        //     w="100%"
        //     h="20%"
        //     // paddingTop={"0.5rem"} border='1px'
        // >
        //     <ButtonGroup isAttached variant='outline' >
        //         <Button leftIcon={<GrView />}>View</Button>
        //         <Button leftIcon={<BsCartPlusFill />}>Add To Cart</Button>
        //     </ButtonGroup>
        // </Flex>
        // </Box>
    );
};

export default ProductVitals;
