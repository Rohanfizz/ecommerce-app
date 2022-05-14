import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchAdminProducts } from "../../api/products";

export const useFetchProductData = () => {
    const [sorter, setSorter] = useState("stock");
    const [data, setData] = useState<any[]>([]);
    const [asc, setAsc] = useState<boolean>(true);
    const [fetchingProduct, setfetchingProduct] = useState<boolean>(false);
    const { refetch: refetchProducts, isLoading } = useQuery(
        "products-getter",
        () => {
            return fetchAdminProducts(sorter, asc);
        },
        {
            enabled: fetchingProduct,
            retry: 0,
            onSettled: (data: any) => {
                // console.log(data, "asd");
                setfetchingProduct(false);
                setData(data.data.data.data);
            },
        }
    );
    useEffect(() => {
        refetchProducts();
    }, []);

    return {
        data,
        sorter,
        setSorter,
        refetchProducts,
        isLoading,
        setfetchingProduct,
        asc,
        setAsc,
    };
};
