import { fetchProductById } from "../../src/api/products";
import ProductMain from "../../src/components/Products/ProductPage/ProductMain";


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
