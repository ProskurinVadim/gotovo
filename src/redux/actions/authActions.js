import {LOGIN,AUTH_FAILED,AUTH_SUCCESS,AUTH_LOADING,DELETE_ADMIN,LOGOUT} from "../actionsNames";
import axios from "axios";
import baseURL from "./baseURL";
export const authLogin = (email,password) => dispatch => {

    dispatch(authLoading())
    axios
        .post(`${baseURL}v1/auth/accounts/admins/signin`,{email,password},)
        .then(({data})=>{

            dispatch(authSuccess(data))
    });

};

export const deleteUser = (id) => dispatch =>  {
    dispatch({type:DELETE_ADMIN,payload:{id}})
};
export const addUser = (admin) => dispatch =>{
    dispatch({type:ADD_ADMIN,payload:{admin}})
};


export const logout = () => dispatch=> {
    dispatch({type:LOGOUT});
}

const authSuccess = (auth) => ({type : AUTH_SUCCESS,payload:{auth}});
const authLoading = () => ({type : AUTH_LOADING});