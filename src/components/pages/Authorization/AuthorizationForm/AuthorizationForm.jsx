import React,{useCallback} from "react";
import {useDispatch} from "react-redux";
import Button from "../../../common/Button";
import Field from "./Field"
import {useInput} from  "../../../../hooks/useInput";
import {useValidation} from "../../../../hooks/useValidation";
import {authLogin} from "../../../../redux/actions/authActions"
import Loadable from "../../../../hoc/Loadable";

const AuthorizationForm = ({loading}) => {
    const {value:emailValue,reset:restEmail,bind:bindEmail} = useInput();
    const {validation:emailValidation,errorText:emailError} = useValidation("email");
    const {value:passwordValue,reset:restPassword,bind:bindPassword} = useInput();
    const {validation:passwordValidation,errorText:passwordError} = useValidation("nonSymbol");
    const dispatch = useDispatch();
    const ButtonOnclick = useCallback(() => {
        emailValidation(emailValue);
        passwordValidation(passwordValue);
        dispatch(authLogin(emailValue,passwordValue));
       // if (!emailError && !passwordError) dispatch(authLogin("wow1996strap@gmail.com","Zhjckfd1945#" ))
    },[emailValue,passwordValue]);

    return (
        <form className={"authorization-form"}>
            <p className="authorization-form-header">Вхід до адмін панелі</p>
            <Field bind={bindEmail} error={emailError} placeholder="Введіть імейл" type="text"/>
            <Field bind={bindPassword} error={passwordError} placeholder="Введіть пароль" type="password"/>
            <Loadable loading={loading}>
                <Button className="authorization-form-button button-common" preventDefault onClick={ButtonOnclick} text="Вхід"/>
            </Loadable>
        </form>
    )
};

export default AuthorizationForm