import { Checkbox, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { categoryFilterAtom } from "../../../store/productStore";

function CategorySelector(props: any) {
    const [categories, setCategories] = useRecoilState(categoryFilterAtom);
    const [all,setAll] = useState(true);

    const onChange = (e: any) => {
        const checked = e.target.checked;
        const value = e.target.value;
        if (checked) {
            setCategories((p) => {
                const newA = [...p];
                newA.push(value);
                return newA;
            });
        } else {
            setCategories((p) => [...p].filter((curr) => curr != value));
        }
    };

    const onAllChanged = (e:any)=>{
        const checked = e.target.checked;
        setAll(p=>!p);
        if(checked){
            setCategories(props.categories);
        }
    }

    return (
        <>
            <Text fontSize={"md"} fontFamily="mono" marginTop="0.5rem">
                Category
            </Text>
            <Checkbox
                defaultChecked
                value={'All'}
                onChange={onAllChanged}
            >
                All
            </Checkbox>
            <Stack direction={"column"} marginLeft="1rem">
                {props.categories.map((category, idx) => (
                    <Checkbox
                        key={idx}
                        value={category}
                        // defaultChecked
                        isDisabled={all}
                        isChecked={
                            (categories.find((x) => x === category) != undefined
                                ? true
                                : false) ||
                                all
                        }
                        onChange={onChange}
                    >
                        {category}
                    </Checkbox>
                ))}
            </Stack>
        </>
    );
}

export default CategorySelector;
