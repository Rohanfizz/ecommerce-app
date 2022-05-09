import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    Grid,
    GridItem,
    Icon,
    IconButton,
    Image,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiEdit, BiRupee } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { getRecoil } from "recoil-nexus";
import { isPromise } from "util/types";
import useCart from "../../../hooks/query/useCart";
import { isPrivilagedAtom } from "../../../store/authStore";
import AddToCartButton from "../../Cart/AddToCartButton";

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
    const router = useRouter();
    const isPrivilaged = useRecoilValue(isPrivilagedAtom);
    console.log(isPrivilaged);
    const ratingStars: any[] = [];
    for (let i = 1; i <= 5; i++) {
        if (product.ratingNumber >= i)
            ratingStars.push(<Icon as={AiFillStar} color="ratingStar" />);
        else ratingStars.push(<Icon as={AiOutlineStar} color="ratingStar" />);
    }

    const productClickHandler = () => {
        router.push(`/product/${product._id}`);
    };

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
            _hover={{ cursor: "pointer" }}
        >
            {isPrivilaged && (
                <IconButton
                    aria-label="Edit product"
                    icon={<BiEdit />}
                    color="white"
                    fontSize="2rem"
                    pos="absolute"
                    bg="cyan.600"
                    h="3rem"
                    w="3rem"
                    _hover={{
                        bg: "cyan.900",
                    }}
                />
            )}
            <Box w="100%" h="55%">
                <Image
                    alt={product.name}
                    src={product.productImage[0]}
                    objectFit="scale-down"
                    w="100%"
                    h="100%"
                />
            </Box>

            <Box minH="5rem">
                <Text
                    fontSize="1.1rem"
                    fontFamily="verdana"
                    paddingTop="1rem"
                    as="em"
                    noOfLines={2}
                >
                    {product.name}
                </Text>
            </Box>
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
                <ButtonGroup h="100%">
                    <Button leftIcon={<GrView />} onClick={productClickHandler}>
                        View
                    </Button>
                    <AddToCartButton product={product} />
                </ButtonGroup>
            </Flex>
        </Flex>
    );
};

export default ProductCard;
