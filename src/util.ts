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