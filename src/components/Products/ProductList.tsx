import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./Product/ProductCard";

const productList = [
    {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        ],
    },
    {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/51gxFVB9xvL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        ],
    },
    {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        ],
    },
    {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        ],
    },
    {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        ],
    },
    {
        uuid: "asdasd",
        name: "Makeup Revolution Maxi Reloaded Palette Large It Up, Multicolor, 60 g",
        primaryCategory: "Spray",
        ratingNumber: 4,
        reviewCount: 264,
        price: 1299,
        stockStatus: true,
        productImage: [
            "https://m.media-amazon.com/images/I/91zfFbCp7eL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91XD5PkJVgL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/91KeBvIAECL._AC_UL320_.jpg",
        ],
    },
];

function ProductList() {
    return (
        <Flex
            // h="100%"
            w="100%"
            paddingLeft="1rem"
            flexWrap={'wrap'}
            justifyContent="center"
            gap="1rem"
        >
            {productList.map((product, idx) => (
                <ProductCard product={product} key={idx} />
            ))}
        </Flex>
    );
}

export default ProductList;
