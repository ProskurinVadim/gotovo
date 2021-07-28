import React,{useState} from "react";
import Button from "../../../../common/Button";
import {useDispatch} from "react-redux";
import {deleteAdmin,chnageAdmin} from "../../../../../redux/actions/adminsAction"
import Input from "../../../../common/Input";
import {useInput} from "../../../../../hooks/useInput";

const AdminsButtons = ({data}) => {
    const {value : emailValue,bind : emailBind} = useInput(data.email);
    const {value : passwordValue,bind : passwordBind} = useInput();

    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();
    const deleteClick = () => {
        dispatch(deleteAdmin(data._id));
        setOpen(false)
    };
    const handelChange = () => {
        const newAdmin = {email:emailValue,password:passwordValue};
        dispatch(chnageAdmin(data._id,newAdmin))
    };
    return (
        <div style={{position:"relative"}} >
            {open &&
                <div className="local-modal" style={{position: "absolute", left: -400}}>
                    <p>Введіть емейл</p>
                    <Input className="common-input" {...emailBind} />
                    <p style={{marginTop:10}}>Введіть пароль</p>
                    <Input className="common-input" {...passwordBind} />
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