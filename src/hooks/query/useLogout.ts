import { useRecoilState } from "recoil";
import { userTokenAtom, userUUIDAtom } from "../../store/authStore";
import { cartAtom } from "../../store/CartStore";

const useLogout = () =>{
    const [token, setToken] = useRecoilState(userTokenAtom);
    const [userUUID, setuserUUID] = useRecoilState(userUUIDAtom);    
    const [cart,setCart] = useRecoilState(cartAtom);

    const logoutFn = ()=>{
        setToken(null);
        setuserUUID(null);
        setCart([]);
    }
    return {logoutFn};
}

export default useLogout;