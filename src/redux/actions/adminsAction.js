import {GET_ADMINS} from "../actionsNames";
import axios from "../../axios";
import baseURL from "../../axios/baseURL";

export const deleteAdmin = (id) => dispatch =>  {
    return axios
        .delete(`${baseURL}​/api/v1/admins/${id}`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=> {
            dispatch(getAdmins())
        })
        .catch(e => {
            console.log(e)
        })
};
export const addAdmin = (admin) => dispatch => {
    axios
        .post(`${baseURL}​/api/v1/auth/accounts/admins/signup`,{...admin},{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=> dispatch(getAdmins()))
};

export const chnageAdmin  = (id,admin) => dispatch => {
    axios
        .put(`${baseURL}​/api/v1/admins/${id}`,{...admin},{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=> {
            dispatch(getAdmins())
        })
        .catch(e => {
            console.log(e)
        })
    dispatch(getAdmins())
};

export const getAdmins = () => dispatch => {
    axios.get(`${baseURL}/api/v1/admins`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(({data})=> {
            console.log(data);
            dispatch({type:GET_ADMINS,payload:{admins:data.results}})
        })
};
