import React from "react";
import {
    chakra,
    Flex,
    useColorModeValue,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { getRecoil, setRecoil } from "recoil-nexus";
import {
    fetchingProductsAtom,
    limitResultsAtom,
    pageNumberAtom,
    totalProductsAtom,
} from "../../store/productStore";
import { useRecoilState } from "recoil";

const PagButton = (props) => {
    const activeStyle = {
        bg: "blackAlpha.500",
        color: useColorModeValue("white", "gray.200"),
    };

    return (
        <Button
            mx={1}
            px={4}
            py={2}
            rounded="md"
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.700", "gray.200")}
            opacity={props.disabled && 0.6}
            _hover={activeStyle}
            cursor={props.disabled && "not-allowed"}
            isActive={props.isActive}
            _active={activeStyle}
            onClick={props.onClick}
            // {...(props.active && activeStyle)}
        >
            {props.children}
        </Button>
    );
};

const Paginator = () => {
    const MButton = (props) => {
        const DoubleArrow = props.left ? AiOutlineLeft : AiOutlineRight;
        const [hovered, setHovered] = React.useState(false);
        const color1 = useColorModeValue("brand.800", "brand.700");
        const color2 = useColorModeValue("gray.100", "gray.200");

        return (
            <chakra.a
                w={8}
                py={2}
                color={useColorModeValue("gray.700", "gray.200")}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                cursor="pointer"
                textAlign="center"
            >
                {hovered ? (
                    <Icon
                        as={DoubleArrow}
                        boxSize={3}
                        cursor="pointer"
                        color={color1}
                    />
                ) : (
                    <Icon
                        as={HiDotsHorizontal}
                        color={color2}
                        boxSize={4}
                        opacity={0.5}
                    />
                )}
            </chakra.a>
        );
    };
    
    const [page,setPage] = useRecoilState(pageNumberAtom);
    const isVisible = (cPage, targetPage) =>
        targetPage >= cPage - 3 && targetPage <= cPage + 3;

    let totalPages = Math.ceil(
        getRecoil(totalProductsAtom) / getRecoil(limitResultsAtom)
    );
    // console.log(totalPages);
    let numbers = [] as number[];
    for (let i = 1; i <= totalPages; i++) numbers.push(i);
    const incrementDecrementPage = (val)=>{
        setPage(p=>p+val);
        setRecoil(fetchingProductsAtom,true);
    }

    return (
        <Flex
            h="10%"
            bg={"primary"}
            p={50}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Flex>
                <Button isDisabled={page === 1} onClick={()=>incrementDecrementPage(-1)}>
                    <Icon
                        as={IoIosArrowBack}
                        // color={useColorModeValue("gray.700", "gray.200")}
                        boxSize={4}
                    />
                </Button>
                {/* <PagButton>1</PagButton>
                <PagButton active>2</PagButton>
                <PagButton>3</PagButton>
                <PagButton>4</PagButton>
                <PagButton>5</PagButton> */}
                {numbers.map((num) => {
                    if (isVisible(num, page)) {
                        return (
                            <PagButton
                                key={num}
                                isActive={num === page}
                                onClick={()=>{
                                    setPage(num);
                                    setRecoil(fetchingProductsAtom,true);
                                    console.log('asdasd');
                                }}
                            > 
                                {num}
                            </PagButton>
                        );
                    }
                    return <></>;
                })}

                {!isVisible(totalPages, page) && (
                    <>
                        <MButton right /> <PagButton>{totalPages}</PagButton>
                    </>
                )}
                <Button isDisabled={page === totalPages} onClick={()=>incrementDecrementPage(1)}>
                    <Icon
                        as={IoIosArrowForward}
                        // color={useColorModeValue("gray.700", "gray.200")}
                        boxSize={4}
                    />
                </Button>
                <Menu >
                    <MenuButton
                        ml={1}
                        as={Button}
                        rightIcon={<AiOutlineDown />}
                    >
                        10 / page
                    </MenuButton>
                    <MenuList defaultValue={10}>
                        <MenuItem value={20}>20 / page</MenuItem>
                        <MenuItem value={30}>30 / page</MenuItem>
                        <MenuItem value={40}>40 / page</MenuItem>
                        <MenuItem value={50}>50 / page</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    );
};

export default Paginator;
