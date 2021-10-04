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
    GET_MARRIAGE_OFFICE,
    SET_MARRIAGE_OFFICE,
} from "../actionsNames";
import axios from "../../axios";
import baseURL from "../../axios/baseURL"
export const getApplications = () => dispatch => {
    dispatch(loadApplications());
    axios.get(`${baseURL}/api/v1/orders`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(({data})=> {
            dispatch(getApplicationsData(data.results))
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
export const deleteApplication = id => {
    axios.delete(`${baseURL}/api/v1/orders/${id}`,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
};
export const changeApplication = (id,status,comment) => dispatch => {
    axios
        .patch(`${baseURL}/api/v1/orders/${id}`,{status,_id:id,comment},{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
        .then(()=>dispatch({type:CHANGE_APPLICATION_STATUS,payload:{id,status}}));
};
export const addApplication = application => {
    axios.post(`${baseURL}/api/v1/orders`,application,{headers : { 'Authorization' : 'Bearer ' + localStorage.getItem("token")}})
};
export const addSocketApplication = (application) => ({type:ADD_APPLICATION,payload:{application}});
export const toggleApplicationsModal = (modal,currentApplication={},add) => dispatch => {
    dispatch({type:TOGGLE_MODAL_APPLICATIONS,payload:{modal,currentApplication,add}});
};
export const getDocuments = (docId) => {
    axios
        .post(`${baseURL}/api/v1/docs/${docId}`)
        .then(({data})=>{
            const newWindow = window.open();
            newWindow.location.href = '/some/url';
        });
};
export const getApplicationsData = (applications) => ({type:GET_APPLICATIONS,payload:{applications}});
const errorApplications = err => ({type:ERROR_APPLICATION,payload:{err}});
const loadApplications = () => ({type:LOADING_APPLICATIONS});