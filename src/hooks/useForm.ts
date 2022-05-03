import { useState } from "react";

const useForm = (validatorFunction: (data: any) => boolean) => {
    const [formValue, setFormValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [wrongValue, setWrongValue] = useState(false);

    const valueOnChange = (e: any) => {
        setFormValue(e!.target!.value);
        setIsTouched(true);
    };
    const valueOnBlur = (e: any) => {
        setIsTouched(true);
    };
    const isValid = validatorFunction(formValue);
    const isError = !(!isTouched || isValid);
    // setWrongValue(!isCorrect);

    return { formValue, wrongValue, valueOnChange, valueOnBlur ,isError,isValid};
};
export default useForm;
