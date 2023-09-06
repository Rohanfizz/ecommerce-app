import { setRecoil } from "recoil-nexus"
import { errorTextAtom, showErrorModalAtom, showSuccessModalAtom, successTextAtom } from "./store/UtilStore"

export const showError = (text:string)=>{
    setRecoil(errorTextAtom,text);
    setRecoil(showErrorModalAtom,true);
}

export const showSuccess = (text:string)=>{
    setRecoil(successTextAtom,text);
    setRecoil(showSuccessModalAtom,true);
}

export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];