import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { fetchProducts } from "../../api/products";
import { productAtom } from "../../store/productStore";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";

const useProducts = () => {
    const [products, setProducts] = useRecoilState(productAtom);
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [errorText, setErrorText] = useRecoilState(errorTextAtom);

    useQuery("fetch-all-products", fetchProducts, {
        retry: 0,
        onError: () => {
            setErrorText("There was a problem fetching products...");
            setshowErrorModal(true);
        },
        onSettled: (data) => {
            // console.log(data?.data?.data?.data);
            setProducts(data?.data?.data?.data);
        },  
    });
};

export default useProducts;
