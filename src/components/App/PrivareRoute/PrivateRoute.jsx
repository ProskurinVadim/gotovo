import React from "react";
import {Route, Redirect, Switch} from "react-router-dom"
import {useSelector} from "react-redux";
import Conditional from "../../../hoc/Conditional/Condition"
import If from "../../../hoc/Conditional/If";
import Else from "../../../hoc/Conditional/Else";
import Applications from "../../pages/Applications";
import Admins from "../../pages/Admins";
import NavbarWeapper from "../../../wrappers/NavbarWrapper";
import ModalWrapper from "../../../wrappers/ModalWrapper";
import Calendar from "../../pages/Calendar";

const PrivateRoute = () => {
    const currentUser = useSelector(({auth})=> auth.currentUser);
    return (
        <Switch>
            <Conditional condition={Object.keys(currentUser).length}>
                <If>
                    <NavbarWeapper>
                        <Route path="/applications" component={Applications}/>
                        <Route path="/admins" component={Admins}/>
                        {/*<Route path="/calendar" component={Calendar} />*/}
                        <ModalWrapper />
                    </NavbarWeapper>
                </If>
                <Else>
                    <Redirect to="/login"/>
                </Else>
            </Conditional>
        </Switch>
    )

};

export default PrivateRoute