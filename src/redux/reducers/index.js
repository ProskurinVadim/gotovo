import {combineReducers} from "redux";
import authReducer from "./authReducer";
import applicationsReducer from "./applicationsReducer";
import adminsReducer from "./adminsReducer"

export default combineReducers({
    //login
    auth : authReducer,
    //applications
    applications : applicationsReducer,
    //admins
    admins : adminsReducer
})