import React from "react"
import Input from "../../../../common/Input";

const Field = ({bind,error,placeholder,type}) => {
    return (
        <div className="authorization-form-field">
            <Input placeholder={placeholder} className="authorization-form-input common-input" {...bind} type={type}/>
            <p className="authorization-form-field-text">{error && error}</p>
        </div>
    )
};

export default Field