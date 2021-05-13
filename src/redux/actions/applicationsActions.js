import {
    GET_APPLICATIONS,
    SET_APPLICATION,
    UNSET_APPLICATION,
    DELETE_APPLICATION,
    DELETE_APPLICATIONS,
    ERROR_APPLICATION,
    CHANGE_APPLICATION_STATUS,
    ADD_APPLICATION,
    LOADING_APPLICATIONS,
    TOGGLE_MODAL_APPLICATIONS,
} from "../actionsNames";
import axios from "../../axios";
import baseURL from "../../axios/baseURL"
export const getApplications = () => dispatch => {
    dispatch(loadApplications());
    axios.get(`${baseURL}/api/v1/orders`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(({data})=> {
            console.log(data)
            dispatch({type:GET_APPLICATIONS,payload:{applications:data.results}})
        })
};
export const setApplication = application => dispatch => {
    axios
        .post(`${baseURL}/api/v1/orders`,{...application},{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=>dispatch({type : SET_APPLICATION,payload:{application}}))
};
export const unSetApplications = () => dispatch => {
    dispatch({type:UNSET_APPLICATION})
};
const deleteApplication = index => dispatch => {
    dispatch({type:DELETE_APPLICATION,payload:{index}})
};
const deleteApplications = ids => dispatch => {
    dispatch({type:DELETE_APPLICATIONS,payload:{ids}})
};
export const changeApplication = (id,status) => dispatch => {
    axios
        .patch(`${baseURL}/api/v1/orders/${id}`,{status,_id:id})
        .then(()=>dispatch({type:CHANGE_APPLICATION_STATUS,payload:{id,status}}));
};
export const addApplication = application => dispatch => {
    dispatch({type:ADD_APPLICATION,payload:{application}})
};

export const toggleApplicationsModal = () => dispatch => {
    dispatch({type:TOGGLE_MODAL_APPLICATIONS});
};
const errorApplications = err => ({type:ERROR_APPLICATION,payload:{err}});
const loadApplications = () => ({type:LOADING_APPLICATIONS});