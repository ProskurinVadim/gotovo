import {LOGIN,AUTH_FAILED,AUTH_SUCCESS,AUTH_LOADING,DELETE_ADMIN} from "../actionsNames";

export const authLogin = ({email,password}) => dispatch => {
    dispatch(authLoading())
    setTimeout(()=>{
        dispatch(authSuccess({email,password}))
    },1000);

};

export const deleteUser = (id) => dispatch =>  {
    dispatch({type:DELETE_ADMIN,payload:{id}})
};

const authSuccess = ({email,password}) => ({type : AUTH_SUCCESS,payload:{email,password}});
const authLoading = () => ({type : AUTH_LOADING});