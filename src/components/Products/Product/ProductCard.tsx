import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

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
    return (
        <Flex
            flexDir="column"
            h="30rem"
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
            <Text
                fontSize="0.9rem"
                fontWeight="bold"
                fontFamily="verdana"
                paddingTop="1rem"
                as="em"
                noOfLines={2}
            >
                {product.primaryCategory}
            </Text>
        </Flex>
    );
};

export default ProductCard;
