import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useRecoilState } from "recoil";
import { confettiAtom } from "../../store/UtilStore";
import Expire from "./Expire";

const ConfettiCustom = () => {
    const [startAnimation,setstartAnimation] = useState(false);
    useEffect(()=>{
        setstartAnimation(true);
    },[])
    return (
        // <Expire
        //     delay={6000}
        //     setterFunction={setshowConfetti}
        //     visibleProperty={showConfetti}
        // >
        <>
            {startAnimation && <Confetti
                // width={1000}
                // height={1000}
                numberOfPieces={300}
                tweenDuration={2}
                recycle={false}
            />}
            </>
        // </Expire>
    );
};

export default ConfettiCustom;
