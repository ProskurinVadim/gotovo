import {
    GET_APPLICATIONS,
    SET_APPLICATION,
    UNSET_APPLICATION,
    DELETE_APPLICATION,
    DELETE_APPLICATIONS,
    ERROR_APPLICATION,
    CHANGE_APPLICATION,
    ADD_APPLICATION,
    LOADING_APPLICATIONS,
    TOGGLE_MODAL_APPLICATIONS
} from "../actionsNames";

const getApplications = () => dispatch => {
    dispatch(loadApplications());
    setTimeout(()=>{
        dispatch({type:GET_APPLICATIONS});
    },1000);
};
export const setApplication = application => dispatch => {
    dispatch({type : SET_APPLICATION,payload:{application}})
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
const changeApplication = application => dispatch => {
    dispatch({type:CHANGE_APPLICATION,payload:{application}})
};
const addApplication = application => dispatch => {
    dispatch({type:ADD_APPLICATION,payload:{application}})
};

export const toggleApplicationsModal = () => dispatch => {
    dispatch({type:TOGGLE_MODAL_APPLICATIONS});
};
const errorApplications = err => ({type:ERROR_APPLICATION,payload:{err}});
const loadApplications = () => ({type:LOADING_APPLICATIONS});