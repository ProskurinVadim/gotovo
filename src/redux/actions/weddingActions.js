import {GET_WEDDINGS_DAYS, SET_WEDDING_DAYS, LOADING_WEDDINGS_DAYS, ERROR_WEDDINGS_DAYS} from "../actionsNames";
import axios from "../../axios";
import baseURL from "../../axios/baseURL";

export const getUnblockDays = () => dispatch => {
    loadingWeddingsDays();
    return axios
        .get(`${baseURL}/api/v1/events`,)
        .then(({data})=>  {
            dispatch({type:GET_WEDDINGS_DAYS,payload:{unBlockDays:data}})
        })
        .catch(e => errorWeddingsDays(e))
};
export const setUnblockDays = (startDate, endDate,newData) => dispatch => {
    return  axios
        .post(`${baseURL}/api/v1/events`,{startDate, endDate})
        .then(({data})=>  {
            dispatch({type:GET_WEDDINGS_DAYS,payload:{unBlockDays:newData}})
        })
}
const loadingWeddingsDays = () => dispatch => dispatch({type : LOADING_WEDDINGS_DAYS});

const errorWeddingsDays = (e) => dispatch => dispatch({type : ERROR_WEDDINGS_DAYS});