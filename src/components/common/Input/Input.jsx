import React from "react";

const Input = (props,{className,placeholder,type}) => (
    <input className={className}  type={type} placeholder={placeholder} {...props}/>
);

export default Input