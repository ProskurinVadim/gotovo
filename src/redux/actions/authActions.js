import {LOGIN,AUTH_FAILED,AUTH_SUCCESS,AUTH_LOADING,DELETE_ADMIN,LOGOUT} from "../actionsNames";
import axios from "axios";
import baseURL from "./baseURL";
export const authLogin = (email,password) => dispatch => {

    dispatch(authLoading())
    axios
        .post(`${baseURL}v1/auth/accounts/admins/signin`,{email,password},{withCredentials:true,headers: {"Access-Control-Allow-Origin": "*"}
        })
        .then((data)=>{
            console.log(data)
    });
    setTimeout(()=>{
        dispatch(authSuccess({email,password}))
    },1000);

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

const authSuccess = ({email,password}) => ({type : AUTH_SUCCESS,payload:{email,password}});
const authLoading = () => ({type : AUTH_LOADING});