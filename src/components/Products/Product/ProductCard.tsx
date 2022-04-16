import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Grid,
    GridItem,
    Icon,
    Image,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";

const ProductCard: React.FC = ({ product }: any) => {
    // uuid: "asdasd",
    //     name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
    //     primaryCategory: "Spray",
    //     ratingNumber: 4,
    //     reviewCount: 264,
    //     price: 1299,
    //     stockStatus: true,
    //     productImage: [
    //         "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
    //         "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
    //         "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
    //     ],
    const ratingStars: any[] = [];
    for (let i = 1; i <= 5; i++) {
        if (product.ratingNumber >= i)
            ratingStars.push(<Icon as={AiFillStar} color="ratingStar" />);
        else ratingStars.push(<Icon as={AiOutlineStar} color="ratingStar" />);
    }
    return (
        <Flex
            flexDir="column"
            h="27rem"
            w="20rem"
            // border="1px"
            borderRadius={"0.5rem"}
            boxShadow="xl"
            p="1.5"
            rounded="md"
            bg="white"
        >
            <Box w="100%" h="55%">
                <Image
                    alt={product.name}
                    src={product.productImage[0]}
                    objectFit="scale-down"
                    w="100%"
                    h="100%"
                />
            </Box>
            <Text
                fontSize="1.1rem"
                fontFamily="verdana"
                paddingTop="1rem"
                as="em"
                noOfLines={2}
            >
                {product.name}
            </Text>
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
            >
                <GridItem rowSpan={1} colSpan={2}>
                    <Text
                        fontSize="0.9rem"
                        fontWeight="bold"
                        fontFamily="verdana"
                        paddingTop="0.2rem"
                        as="em"
                        noOfLines={2}
                    >
                        {product.primaryCategory}
                    </Text>
                </GridItem>
                <GridItem rowSpan={2} colSpan={3}>
                    <Flex
                        color="red.800"
                        alignItems={"center"}
                        justifyContent="flex-end"
                        marginRight={"1rem"}
                    >
                        <Icon as={BiRupee} fontSize={"2xl"} />
                        <Text fontSize="4xl">{product.price}</Text>
                    </Flex>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                    <Flex alignItems={"center"}>
                        {ratingStars}
                        {product.reviewCount}
                    </Flex>
                </GridItem>
            </Grid>

            {/* <Flex
                alignItems={"center"}
                justifyContent="flex-start"
                fontSize="md"
            >
                {product.stockStatus ? "In Stock" : "Out of Stock"}
            </Flex> */}
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                w="100%"
                paddingTop={"0.5rem"}
            >
                <ButtonGroup>
                    <Button leftIcon={<GrView />}>View</Button>
                    <Button leftIcon={<BsCartPlusFill />}>Add To Cart</Button>
                </ButtonGroup>
            </Flex>
        </Flex>
    );
};

export default ProductCard;
