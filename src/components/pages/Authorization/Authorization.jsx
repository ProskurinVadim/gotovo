import React,{useEffect} from "react";
import AuthorizationForm from "./AuthorizationForm"
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
const Authorization = (props) => {
    const [currentUser,loading] = useSelector(({auth}) => [auth.currentUser,auth.loading]);
    const history = useHistory();
    useEffect(()=> {
        Object.keys(currentUser).length && history.push("/applications");
    },[currentUser]);
    return (
        <div className="authorization-page">
            <AuthorizationForm loading={loading}/>
        </div>
    )
};

export default Authorization