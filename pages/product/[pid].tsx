import { Spinner } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { fetchProductById } from "../../src/api/products";
import ProductMain from "../../src/components/Products/ProductPage/ProductMain";
import useProduct from "../../src/hooks/query/useProduct";

function ProductPage({productInfo}) {
    return (
        <>
            <ProductMain product={productInfo} />
        </>
    );
};

export async function getServerSideProps(context) {
    let flag = false;
    const { pid } = context.params;
    try {
        const response = await fetchProductById(pid);
        return {
            props: {
                productInfo: response.data,
            },
        };
    } catch (err) {
        return {
            props: {
                productInfo: undefined,
            },
        };
    }
}

export default ProductPage;
