import React,{useCallback} from "react";
import Modal from "../../../common/Modal";
import {useInput} from "../../../../hooks/useInput";
import {useValidation} from "../../../../hooks/useValidation";
import {useDispatch} from "react-redux";
import Input from "../../../common/Input";
import {addAdmin} from "../../../../redux/actions/adminsAction";

const AdminsModal = ({onClose}) => {
    const {value:emailValue,reset:restEmail,bind:bindEmail} = useInput();
    const {value:passwordValue,reset:restPassword,bind:bindPassword} = useInput();
    // const {value:nameValue,reset:restName,bind:bindName} = useInput();
    // const {value:phoneValue,reset:restPhone,bind:bindPhone} = useInput();
    const {validation:emailValidation,errorText:emailError} = useValidation("email");
    const {validation:passwordValidation,errorText:passwordError} = useValidation("nonSymbol");
    const dispatch =useDispatch();
    const handelClick = useCallback(()=>{
        const eError = emailValidation(emailValue);
        const pError = passwordValidation(passwordValue);
        if(!eError && !pError) {
            const admin = {email: emailValue, password: passwordValue,};
            dispatch(addAdmin(admin));
            onClose()
        }
    },[emailValue,passwordValue]);
    return (
        <Modal okFunction={handelClick} cancelFunction={onClose} cancelText="Закрити" okText="Зберегти" hideFunction={onClose} className="">
            <div className="modal-inputs-list">
                <p className="application-text" style={{fontSize:20}}>Введить нового юзера</p>
                <p className="application-text">Емейл</p>
                <Input placeholder="Введіть імейл" className="authorization-form-input common-input" {...bindEmail}  type="text"/>
                {emailError && <p className="authorization-form-field-text">{emailError}</p>}
                <p className="application-text">Пароль</p>
                <Input placeholder="Введіть пароль" className="authorization-form-input common-input" {...bindPassword}  type="text"/>
                {passwordError && <p className="authorization-form-field-text">{passwordError}</p>}
                {/*<Input placeholder="Введіть Імя Фамілію Отчество" className="authorization-form-input common-input" {...bindName}  type="text"/>*/}
                {/*<Input placeholder="Введіть Телефон" className="authorization-form-input common-input" {...bindPhone}  type="text"/>*/}
            </div>
        </Modal>
    )
};

export default AdminsModal