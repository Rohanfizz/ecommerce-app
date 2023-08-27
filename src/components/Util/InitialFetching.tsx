import React, { useEffect } from "react";
import useInitialFetch from "../../hooks/query/useInitialFetch";


const InitialFetching = ({children}) => {
    useInitialFetch();
   
    return <>{children}</>;
};
export default InitialFetching;
