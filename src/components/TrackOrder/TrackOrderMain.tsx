import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CancelOrder from "./CancelOrder";
import DownloadInvoiceAndReview from "./DownloadInvoiceAndReview";
import TrackingSteps from "./TrackingSteps";

const flexer = {
    display: "Flex",
    alignItems: "center",
    // justifyContent:'center',
};

const TrackOrderMain = ({ orderInfo }) => {
    console.log(orderInfo);
    return (
        <>
            <Flex justifyContent={"center"}>
                {/* <Grid
                minH="45rem"
                w="70%"
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            /> */}
                <Grid
                    minH="45rem"
                    w="70%"
                    templateRows="repeat(10, 1fr)"
                    templateColumns="repeat(10, 1fr)"
                    gap={2}
                >
                    <GridItem
                        rowSpan={1}
                        colSpan={10}
                        sx={flexer}
                        textAlign="left"
                        paddingLeft={3}
                        borderBottom="1px solid lightgray"
                    >
                        <Heading fontFamily={"mono"}>
                            📍Tracking Order{" "}
                            <Text color="gray" display={"inline-block"}>
                                #{orderInfo.invoice}
                            </Text>
                        </Heading>
                    </GridItem>
                    <GridItem
                        rowSpan={9}
                        colSpan={5}
                        border="1px solid lightgray"
                        sx={flexer}
                        bg='white'
                        boxShadow=' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                        
                    >
                        <TrackingSteps order={orderInfo}/>
                    </GridItem>
                    <GridItem
                        rowSpan={3}
                        colSpan={5}
                        bg="papayawhip"
                    ><DownloadInvoiceAndReview oid={orderInfo._id}/></GridItem>
                    <GridItem rowSpan={6} colSpan={5} ><CancelOrder oid={orderInfo._id}/></GridItem>
                </Grid>
            </Flex>
        </>
    );
};

export default TrackOrderMain;
