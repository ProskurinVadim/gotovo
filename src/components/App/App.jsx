import React,{useEffect} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import PrivateRoute from "./PrivareRoute";
import Authorization from "../pages/Authorization"
import {authSuccess} from "../../redux/actions/authActions";
import {useDispatch, useSelector} from "react-redux";
const App = () => {
    const dispatch = useDispatch();
    const currentUser  = useSelector(({auth})=> auth.currentUser);
    useEffect(()=> {
        const auth = JSON.parse(localStorage.getItem("auth"));
        const valid = JSON.parse(localStorage.getItem("valid"));
        console.log(valid,auth)
        const currentTime = (new Date().getTime() - 10*60*5);
        (auth && valid > currentTime) && dispatch(authSuccess(auth))
    },[]);
    useEffect(()=> {
        if(Object.keys(currentUser).length) {
            console.log(currentUser)
            localStorage.setItem("auth", JSON.stringify(currentUser));
            localStorage.setItem("valid",JSON.stringify((new Date().getTime())))
        }
    },[currentUser]);
    return (
        <BrowserRouter basename="/gotovo/admin">
            <Route exact path="/login" component={Authorization}/>
            <PrivateRoute />
        </BrowserRouter>
    )
};

export default App
