import { useState } from "react";

const useForm = (validatorFunction: (data: any) => boolean) => {
    const [formValue, setFormValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [wrongValue, setWrongValue] = useState(false);

    const valueOnChange = (e: any) => {
        setFormValue(e!.target!.value);
        setIsTouched(true);
    };
    const valueOnFocus = (e: any) => {

        // setIsTouched(true);
    };
    const isError = !(!isTouched || validatorFunction(formValue));
    // setWrongValue(!isCorrect);

    return { formValue, wrongValue, valueOnChange, valueOnFocus ,isError};
};
export default useForm;
