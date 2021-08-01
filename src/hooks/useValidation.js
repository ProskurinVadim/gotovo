import {useState,useCallback} from "react";
import {validationList} from "../utils/validation";
export const useValidation = (key) => {
    const [error,setError] = useState("");
    const validation = validationList[key];
    return {
        validation : useCallback((data) => {
            !validation.validationFunc(data) ? setError(validation.validationText) : setError("")
            return !validation.validationFunc(data)
        },key),
        errorText : error
    }
};