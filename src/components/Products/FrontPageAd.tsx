import { Box, Button, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RecordWithTtl } from "dns";
import { useRecoilState } from "recoil";
import { adIdxState } from "../../store/UtilStore";

const ads = [
    {
        imageUrl:
            "https://eadn-wc04-371788.nxedge.io/cdn/wp-content/uploads/2020/09/Shortcut-to-Choose-a-Fill-Color-in-Office-365.png",
        alt: "new product",
    },
    {
        imageUrl:
            "https://c8.alamy.com/comp/PT97M3/design-bright-banner-on-white-background-horizontal-autumn-banner-autumn-sale-30-off-vector-illustrations-for-flyers-posters-email-ads-promotional-material-PT97M3.jpg",
        alt: "new product",
    },
    {
        imageUrl:
            "https://c8.alamy.com/comp/PT97M3/design-bright-banner-on-white-background-horizontal-autumn-banner-autumn-sale-30-off-vector-illustrations-for-flyers-posters-email-ads-promotional-material-PT97M3.jpg",
        alt: "new product",
    },
];

function FrontPageAd() {
    const [visibleAd, setvisibleAdState] = useRecoilState(adIdxState);

    const changeAdHandler = (e: React.MouseEvent) => {
        // setvisibleAdState(e.);
    };

    return (
        <Box  w="100%" h="20rem">
            <Box h="100%" w="100%" >
                <Image
                    alt="ad"
                    objectFit={"inherit"}
                    // src={ads[visibleAd].imageUrl}
                    bg="skyblue "
                    w="100%"
                    h="100%"
                />
            </Box>
            <Button as={AiOutlineLeft} pos="absolute" top="12%" left="7%" />
            <Button as={AiOutlineRight} pos="absolute" top="12%" left="90%" />
            
            <Box pos="absolute" top="20%" left="calc((100% - 2rem)/2)">
                {ads.map((ad, idx) => (
                    <Icon
                        key={idx}
                        as={GoPrimitiveDot}
                        onClick={changeAdHandler}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default FrontPageAd;
