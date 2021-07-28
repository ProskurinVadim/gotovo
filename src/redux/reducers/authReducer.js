import {AUTH_SUCCESS, AUTH_LOADING,LOGOUT,authFa} from "../actionsNames";
const initialState = {
    currentUser : {},
    errorMessage : "",
    loading : false,
};

export default function (state = initialState, {type,payload}) {
    switch (type) {
        case AUTH_SUCCESS : {
            console.log(payload);
            const newState = {
                users: state.users,
                currentUser: payload.auth,
                errorMessage: "",
                loading: false,
            };
            return {...newState}
        }
        case AUTH_LOADING : {
            return {
                ...state,
                loading : !state.loading,
            }
        }

        case LOGOUT : {
            return {
                ...state,
                currentUser: {},
            }

        }
        default : {
            return state
        }
    }
}