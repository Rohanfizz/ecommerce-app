import localforage from "localforage";
import { useRecoilState } from "recoil";
import Cart from "../../Models/cartModel";
import { userTokenAtom, isPrivilagedAtom } from "../../store/authStore";
import { cartAtom } from "../../store/CartStore";

const useLogout = () =>{
    const [token, setToken] = useRecoilState(userTokenAtom);
    const [userUUID, setPrivilaged] = useRecoilState(isPrivilagedAtom);    
    const [cart,setCart] = useRecoilState(cartAtom);

    const logoutFn = ()=>{
        const fn = async()=>{
            setToken(null);
        setPrivilaged(false);
        setCart(new Cart());
        await localforage.removeItem('userToken');
        }
        fn();
    }
    return {logoutFn};
}

export default useLogout;