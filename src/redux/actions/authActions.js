import {LOGIN,AUTH_SUCCESS,AUTH_LOADING,LOGOUT} from "../actionsNames";
import axios from "../../axios";
import baseURL from "../../axios/baseURL";
export const authLogin = (email,password) => dispatch => {

    dispatch(authLoading());
    axios
        .post(`${baseURL}/api/v1/auth/accounts/admins/signin`,{email,password},)
        .then(({data})=>{
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('refresh-token', data.refreshToken);
            dispatch(authSuccess(data.adminInfo))
        })
        .catch(e => dispatch(authLoading()))

};




export const logout = () => dispatch=> {
    dispatch({type:LOGOUT});
};

export const authSuccess = (auth) => ({type : AUTH_SUCCESS,payload:{auth}});
const authLoading = () => ({type : AUTH_LOADING});