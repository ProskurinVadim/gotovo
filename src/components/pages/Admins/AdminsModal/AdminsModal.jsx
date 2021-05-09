import React,{useCallback} from "react";
import Modal from "../../../common/Modal";
import {useInput} from "../../../../hooks/useInput";
import {useValidation} from "../../../../hooks/useValidation";
import {useDispatch} from "react-redux";
import Input from "../../../common/Input";
import {addUser} from "../../../../redux/actions/authActions";

const AdminsModal = ({onClose}) => {
    const {value:emailValue,reset:restEmail,bind:bindEmail} = useInput();
    const {value:passwordValue,reset:restPassword,bind:bindPassword} = useInput();
    const {value:nameValue,reset:restName,bind:bindName} = useInput();
    const {value:phoneValue,reset:restPhone,bind:bindPhone} = useInput();
    const dispatch =useDispatch();
    const handelClicl = useCallback(()=>{
        const andmin = {email:emailValue,password:passwordValue,name:nameValue,phone:phoneValue};
        dispatch(addUser(andmin))
    },[emailValue,passwordValue,nameValue]);
    return (
        <Modal okFunction={handelClicl} cancelFunction={onClose} cancelText="Закрити" okText="Зберегти" hideFunction={onClose}>
            <Input placeholder="Введіть імейл" className="authorization-form-input common-input" {...bindEmail}  type="text"/>
            <Input placeholder="Введіть пароль" className="authorization-form-input common-input" {...bindPassword}  type="text"/>
            <Input placeholder="Введіть Імя Фамілію Отчество" className="authorization-form-input common-input" {...bindName}  type="text"/>
            <Input placeholder="Введіть Телефон" className="authorization-form-input common-input" {...bindPhone}  type="text"/>
        </Modal>
    )
};

export default AdminsModal