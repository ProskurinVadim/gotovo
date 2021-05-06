import React,{useState,useCallback} from "react";
import Input from "../Input";
import Changeable from "../../icons/Changeable"
const ChangeableInput = (props,{className,placeholder,type}) => {
    const [changeable,setChangeable] = useState(!props.value);
    const handelClick = useCallback(()=> {
        setChangeable(!changeable)
    },[changeable]);
    return (
        <div className={`changeable-field ${!changeable ? "" : "un-changeable"}`}>
            <Input  className={className} placeholder={placeholder} type={type} readOnly={changeable} {...props}/>
            <Changeable className="changeable-field-icon" onClick={handelClick}/>
        </div>
    )
};

export default ChangeableInput;
