import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import PrivateRoute from "./PrivareRoute";
import Authorization from "../pages/Authorization"
const App = () => {
    return (
        <BrowserRouter basename="/gotovo/admin">
            <Route exact path="/login" component={Authorization}/>
            <PrivateRoute />
        </BrowserRouter>
    )
};

export default App
