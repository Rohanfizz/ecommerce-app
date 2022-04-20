import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Expire = (props:any) => {
//   const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      props.setterFunction(false);
    }, props.delay);
    return () => clearTimeout(timer)
  }, [props.delay]);

  return props.visibleProperty ? <Box position="absolute">{props.children}</Box> :<> </>;
};

export default Expire;