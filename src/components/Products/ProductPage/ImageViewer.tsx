import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { selectedImageState } from "../../../store/ProductPage";

const ImageViewer: React.FC<{ images: string[] }> = ({ images }) => {
    const [selectedImage, setSelectedImage] =
        useRecoilState(selectedImageState);

    useEffect(() => {
        setSelectedImage(images[0]);
    },[]);

    const toggleSelectedImage = (image: string) => {
        setSelectedImage(image);
        console.log(selectedImage);
    };

    return (
        <Grid
            h="100%"
            w="100%"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={1}
        >
            <GridItem
                rowSpan={10}
                colSpan={1}
                // bg="tomato"
                display="flex"
                flexDir="column"
                alignItems={"center"}
            >
                {images.map((image, idx) => (
                    <Box
                        key={idx}
                        w="100%"
                        h="4rem"
                        bg="white"
                        marginTop={"0.5rem"}
                        border="1px solid gray"
                        onClick={()=> toggleSelectedImage(image)}
                        _hover={{cursor:'pointer'}}
                    >
                        <Image
                            alt={`Image ${idx}`}
                            src={image}
                            h="100%"
                            w="100%"
                            objectFit={"scale-down"}
                        />
                    </Box>
                ))}
            </GridItem>
            <GridItem
                rowSpan={10}
                colSpan={9}
                bg="white"
                borderRadius={"0.5rem"}
                maxH="100%"
                maxW="100%"
            >
                
                    <Image
                        h="100%"
                        w="100%"
                        alt="Selected Image"
                        src={selectedImage}
                        objectFit={"contain"}
                        borderRadius={"0.5rem"}
            boxShadow="xl"
            p="6"
            rounded="md"
            bg="white"
                    />
                
            </GridItem>
        </Grid>
    );
};

export default ImageViewer;
