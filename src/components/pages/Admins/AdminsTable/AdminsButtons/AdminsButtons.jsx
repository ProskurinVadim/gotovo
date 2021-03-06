import React,{useState} from "react";
import Button from "../../../../common/Button";
import {useDispatch} from "react-redux";
import {deleteAdmin,chnageAdmin} from "../../../../../redux/actions/adminsAction"
import Input from "../../../../common/Input";
import {useInput} from "../../../../../hooks/useInput";
import {useValidation} from "../../../../../hooks/useValidation";

const AdminsButtons = ({data}) => {
    const {value : emailValue,bind : emailBind} = useInput(data.email);
    const {value : passwordValue,bind : passwordBind} = useInput();
    const {validation:passwordValidation,errorText:passwordError} = useValidation("nonSymbol");
    const {validation:emailValidation,errorText:emailError} = useValidation("email");
    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();
    const deleteClick = () => {
        dispatch(deleteAdmin(data._id));
        setOpen(false)
    };
    const handelChange = () => {
        const eError = emailValidation(emailValue);
        const pError = passwordValidation(passwordValue);
        const newAdmin = {email:emailValue,password:passwordValue};
        !pError && !pError && dispatch(chnageAdmin(data._id,newAdmin))
    };
    return (
        <div style={{position:"relative"}} >
            {open &&
                <div className="local-modal" style={{position: "absolute", left: -400}}>
                    <p>Введіть емейл</p>
                    <Input className="common-input" {...emailBind} />
                    {emailError && <p className="authorization-form-field-text">{emailError}</p>}
                    <p style={{marginTop:10}}>Введіть пароль</p>
                    <Input className="common-input" {...passwordBind} />
                    {passwordError && <p className="authorization-form-field-text">{passwordError}</p>}
                    <div className="application-buttons">
                        <Button className="button-common" text="Так" onClick={handelChange}/>
                        <Button className="button-common button-common-dangerous" text="Ні" onClick={() => setOpen(false)}/>
                    </div>
                </div>
            }
            <Button text="Удалить" onClick={deleteClick}/>
            <Button text="Изменить" onClick={()=>setOpen(true)}/>
        </div>
    )
};

export default  AdminsButtons