// import { Box, Button, Icon, Image } from "@chakra-ui/react";
// import React from "react";
// import { GoPrimitiveDot } from "react-icons/go";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { RecordWithTtl } from "dns";
// import { useRecoilState } from "recoil";
// import { adIdxState } from "../../store/UtilStore";

// const ads = [
//     {
//         imageUrl:
//             "https://eadn-wc04-371788.nxedge.io/cdn/wp-content/uploads/2020/09/Shortcut-to-Choose-a-Fill-Color-in-Office-365.png",
//         alt: "new product",
//     },
//     {
//         imageUrl:
//             "https://c8.alamy.com/comp/PT97M3/design-bright-banner-on-white-background-horizontal-autumn-banner-autumn-sale-30-off-vector-illustrations-for-flyers-posters-email-ads-promotional-material-PT97M3.jpg",
//         alt: "new product",
//     },
//     {
//         imageUrl:
//             "https://c8.alamy.com/comp/PT97M3/design-bright-banner-on-white-background-horizontal-autumn-banner-autumn-sale-30-off-vector-illustrations-for-flyers-posters-email-ads-promotional-material-PT97M3.jpg",
//         alt: "new product",
//     },
// ];

// function FrontPageAd() {
//     const [visibleAd, setvisibleAdState] = useRecoilState(adIdxState);

//     const changeAdHandler = (e: React.MouseEvent) => {
//         // setvisibleAdState(e.);
//     };

//     return (
//         <Box  w="100%" h="20rem">
//             <Box h="100%" w="100%" >
//                 <Image
//                     alt="ad"
//                     objectFit={"inherit"}
//                     // src={ads[visibleAd].imageUrl}
//                     bg="skyblue "
//                     w="100%"
//                     h="100%"
//                 />
//             </Box>
//             <Button as={AiOutlineLeft} pos="absolute" top="12%" left="7%" />
//             <Button as={AiOutlineRight} pos="absolute" top="12%" left="90%" />

//             <Box pos="absolute" top="20%" left="calc((100% - 2rem)/2)">
//                 {ads.map((ad, idx) => (
//                     <Icon
//                         key={idx}
//                         as={GoPrimitiveDot}
//                         onClick={changeAdHandler}
//                     />
//                 ))}
//             </Box>
//         </Box>
//     );
// }
import React from "react";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function FrontPageAd() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "40px" });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: "Front Ad 1",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, explicabo!",

            image: "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        },
        {
            title: "Front Ad 2",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, explicabo! ",
            image: "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
        },
        {
            title: "Front Ad 3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, explicabo!",
            image: "https://images.unsplash.com/photo-1556139902-7367723b7e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    return (
        <Box
            position={"relative"}
            height={"600px"}
            width={"full"}
            overflow={"hidden"}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={"6xl"}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${card.image})`}
                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Container
                            size="container.lg"
                            height="600px"
                            position="relative"
                        >
                            <Stack
                                spacing={6}
                                w={"full"}
                                maxW={"lg"}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)"
                            >
                                <Heading
                                    fontSize={{
                                        base: "3xl",
                                        md: "4xl",
                                        lg: "5xl",
                                    }}
                                    textAlign={"center"}
                                >
                                    {card.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: "md", lg: "lg" }}
                                    color="GrayText"
                                    textAlign={"center"}
                                >
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default FrontPageAd;
