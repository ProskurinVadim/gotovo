import {DELETE_ADMIN,ADD_ADMIN,CHANGE_ADMIN,GET_ADMINS} from "../actionsNames";
import axios from "../../axios";
import baseURL from "../../axios/baseURL";

export const deleteAdmin = (id) => dispatch =>  {
    return axios
        .delete(`${baseURL}​/api/v1/admins/${id}`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=> dispatch({type:DELETE_ADMIN,payload:{id}}))
        .catch(e => {
            dispatch({type:DELETE_ADMIN,payload:{id}})
        })
};
export const addAdmin = (admin) => dispatch => {
    return axios
        .post(`${baseURL}​/api/v1/auth/accounts/admins/signup`,{...admin},{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=> dispatch({type:ADD_ADMIN,payload:{admin}}))
};

export const chnageAdmin  = (id,admin) => dispatch => {
    return axios
        .put(`${baseURL}/api/v1/admins/?${id}`,{...admin},{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=>dispatch({type:CHANGE_ADMIN,payload:{id,admin}}))
};

export const getAdmins = () => dispatch => {
    axios.get(`${baseURL}/api/v1/admins`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(({data})=> {
            console.log(data);
            dispatch({type:GET_ADMINS,payload:{admins:data.results}})
        })
};
