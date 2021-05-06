import {combineReducers} from "redux";
import authReducer from "./authReducer";
import applicationsReducer from "./applicationsReducer";

export default combineReducers({
    //login
    auth : authReducer,
    //applications
    applications : applicationsReducer,
})