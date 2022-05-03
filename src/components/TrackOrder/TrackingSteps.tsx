import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import {
    AiOutlineCheckCircle,
    AiOutlineDropbox,
    AiOutlineFieldTime,
    AiOutlineSend,
    AiOutlineShopping,
    AiTwotoneHeart,
} from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import {
    BsBookmarkCheck,
    BsClockHistory,
    BsFillSuitHeartFill,
} from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";

// const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }];

const orderStatusDescription = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "blackAlpha.500",
    color: "gray.100",
    borderRadius: "0.2rem",
    w: "100%",
    h: "100%",
    textAlign: "center",
    fontFamily: "verdana",
    p: 2,
    
};

export const TrackingSteps = ({ order }) => {
    const { nextStep, prevStep, reset } = useSteps({
        initialStep: 0,
    });
    const steps = [
        "Placed",
        "Approved",
        "Processing",
        "Dispatched",
        "Out For Delivery",
        "Delivered",
        "Cancelled",
    ];
    const activeStep = steps.indexOf(order.orderStatus) + 1;
    // console.log(order.orderStatus);
    return (
        <Box w="100%" paddingLeft={"10%"}>
            <Steps
                orientation="vertical"
                activeStep={activeStep}
                size="lg"
                w="90%"
                responsive={true}
                colorScheme="purple"
            >
                {/* {steps.map(({ label }, index) => ( */}
                <Step width="100%" label={"Placed"} icon={AiOutlineShopping}>
                    <Box sx={orderStatusDescription}>asdas</Box>
                </Step>
                <Step
                    width="100%"
                    label={"Approved"}
                    icon={AiOutlineCheckCircle}
                >
                    <Box sx={orderStatusDescription}>
                        We are just making some nessesary checks, soon order
                        will be approved :)
                    </Box>
                </Step>
                <Step
                    width="100%"
                    label={"Processing"}
                    icon={AiOutlineFieldTime}
                >
                    <Box sx={orderStatusDescription}>
                        Getting your ordered items ready for dispatch!
                    </Box>
                </Step>
                <Step width="100%" label={"Dispatched"} icon={AiOutlineDropbox}>
                    <Box sx={orderStatusDescription}>
                        Packing and setting up shipping methods!
                    </Box>
                </Step>
                <Step
                    width="100%"
                    label={"Out For Delivery"}
                    icon={AiOutlineSend}
                >
                    <Box sx={orderStatusDescription}>
                        Wooohoo! Your order is out for delivery! We will contact
                        on your provided phone if we need any assistance :)
                    </Box>
                </Step>
                <Step width="100%" label={"Delivered"} icon={AiTwotoneHeart}>
                    <Box sx={orderStatusDescription}>
                        Your order has been delivered! Did not receive yet?
                        Contact us ASAP
                    </Box>
                </Step>
                {/* ))} */}
            </Steps>
            {/* {activeStep === steps.length ? (
                <Flex px={4} py={4} width="100%" flexDirection="column">
                    <Heading fontSize="xl" textAlign="center">
                        Woohoo! All steps completed!
                    </Heading>
                    <Button mx="auto" mt={6} size="sm" onClick={reset}>
                        Reset
                    </Button>
                </Flex>
            ) : (
                <Flex width="100%" justify="flex-end">
                    <Button
                        isDisabled={activeStep === 0}
                        mr={4}
                        onClick={prevStep}
                        size="sm"
                        variant="ghost"
                    >
                        Prev
                    </Button>
                    <Button size="sm" onClick={nextStep}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                </Flex>
            )} */}
        </Box>
    );
};

export default TrackingSteps;
