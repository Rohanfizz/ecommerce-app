import { useRecoilState } from "recoil";
import { priceGTEAtom, priceLTEAtom } from "../store/productStore";

const useFilterBox = ()=>{

    const [priceLTE, setpriceLTE] = useRecoilState(priceLTEAtom);
    const [priceGTE, setpriceGTE] = useRecoilState(priceGTEAtom);

    const priceGTEOnChange = (e:any)=>{
        setpriceGTE(e.target.value);
    }

    const priceLTEOnChange = (e:any)=>{
        setpriceLTE(e.target.value);
    }
    return {priceGTE,priceLTE,priceGTEOnChange,priceLTEOnChange};
}
export default useFilterBox;