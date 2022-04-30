import localforage from "localforage";
import { useRecoilState } from "recoil";
import Cart from "../../Models/cartModel";
import { userTokenAtom, userUUIDAtom } from "../../store/authStore";
import { cartAtom } from "../../store/CartStore";

const useLogout = () =>{
    const [token, setToken] = useRecoilState(userTokenAtom);
    const [userUUID, setuserUUID] = useRecoilState(userUUIDAtom);    
    const [cart,setCart] = useRecoilState(cartAtom);

    const logoutFn = ()=>{
        const fn = async()=>{
            setToken(null);
        setuserUUID(null);
        setCart(new Cart());
        await localforage.removeItem('userToken');
        }
        fn();
    }
    return {logoutFn};
}

export default useLogout;