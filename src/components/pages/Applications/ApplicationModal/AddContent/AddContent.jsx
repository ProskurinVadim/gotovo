import React,{useEffect} from "react";
import Input from "../../../../common/Input";
import {useInput} from "../../../../../hooks/useInput";

const AddContent = ({setApplication,length}) => {
    const {value:manPIBValue,bind:bindManPIB} = useInput();
    const {value:womanPIBValue,bind:bindWomanPIB} = useInput();
    const {value:phoneValue,bind:bindPhone} = useInput();
    const {value:dataValue,bind:bindData} = useInput();
    const {value:packValue,bind:bindPack} = useInput();
    const {value:commentValue,bind:bindComment} = useInput();
    useEffect(()=> {
        setApplication({
            data: dataValue,
            pib: `${manPIBValue} та ${womanPIBValue} `,
            pack: packValue,
            phone: phoneValue,
            status: "нова",
            comments: commentValue,
            id:length
        })
    },[manPIBValue,womanPIBValue,phoneValue,dataValue,packValue,commentValue]);
    return (
        <div className="modal-inputs-list">
            <Input placeholder="Введіть ПІБ нареченого" className="authorization-form-input common-input" {...bindManPIB}  type="text"/>
            <Input placeholder="ВведітьПІБ нареченої" className="authorization-form-input common-input" {...bindWomanPIB}  type="text"/>
            <Input placeholder="Введіть дату" className="authorization-form-input common-input" {...bindData}  type="text"/>
            <Input placeholder="Введіть телефон" className="authorization-form-input common-input" {...bindPhone}  type="text"/>
            <Input placeholder="Введіть пакет послуг" className="authorization-form-input common-input" {...bindPack}  type="text"/>
            <Input placeholder="Введіть коментарій" className="authorization-form-input common-input" {...bindComment}  type="text"/>
        </div>
    )
};

export default AddContent