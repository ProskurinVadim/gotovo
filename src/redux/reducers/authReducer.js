import {AUTH_SUCCESS, AUTH_FAILED, AUTH_LOADING, DELETE_ADMIN, ADD_ADMIN,LOGOUT} from "../actionsNames";
const initialState = {
    users : [],
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
                loading : true,
            }
        }
        case DELETE_ADMIN : {
            const newUser = state.users;
            newUser.filter(elem=>elem.index!==payload.id);
            return{
                ...state,
                users : [...newUser.filter(elem=>elem.index!==payload.id)]
            }
        }
        case ADD_ADMIN : {
            const newUsers = [...state.users,payload.admin];
            return {
                ...state,
                users: newUsers
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