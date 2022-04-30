import localforage from "localforage";
import React, { useEffect } from "react";
import { getRecoil, setRecoil } from "recoil-nexus";
import { fetchInitialCart } from "../../api/cart";
import useInitialFetch from "../../hooks/query/useInitialFetch";
import Cart from "../../Models/cartModel";
import { userTokenAtom } from "../../store/authStore";
import { cartAtom } from "../../store/CartStore";

const InitialFetching = ({children}) => {
    useInitialFetch();
    console.log(` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ad esse amet repellat beatae eum, quae ullam incidunt ipsa dolorem.`);
    
    // setRecoil(userTokenAtom, userToken);
    // setRecoil(cartAtom, cart);

    return <>{children}</>;
};
export default InitialFetching;
