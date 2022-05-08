import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import { fetchProducts } from "../../api/products";
import {
    fetchingProductsAtom,
    limitResultsAtom,
    pageNumberAtom,
    productAtom,
    totalProductsAtom,
} from "../../store/productStore";
import { errorTextAtom, showErrorModalAtom } from "../../store/UtilStore";

const useProducts = () => {
    const [products, setProducts] = useRecoilState(productAtom);
    const [showErrorModal, setshowErrorModal] =
        useRecoilState(showErrorModalAtom);
    const [errorText, setErrorText] = useRecoilState(errorTextAtom);
    const [fetchingProducts, setfetchingProducts] =
        useRecoilState(fetchingProductsAtom);

    useQuery("fetch-all-products", fetchProducts, {
        enabled: fetchingProducts,
        retry: 0,
        onError: () => {
            setErrorText("There was a problem fetching products...");
            setshowErrorModal(true);
        },
        onSettled: (data) => {
            // console.log(data?.data?.total);
            setfetchingProducts(false);
            setRecoil(totalProductsAtom, data?.data?.total);
            setRecoil(pageNumberAtom, data?.data?.page);
            setRecoil(limitResultsAtom, data?.data?.limit);
            setProducts(data?.data?.data?.data);
            if (typeof window != undefined) window.scrollTo(0, 0);
        },
    });
    useEffect(() => {
        setfetchingProducts(true);
    }, []);
};

export default useProducts;
