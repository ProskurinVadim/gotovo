import {CHANGE_ADMIN, DELETE_ADMIN, ADD_ADMIN,GET_ADMINS} from "../actionsNames";
const initialState = {
    admins : [],
    errorMessage : "",
    loading : false,
};

export default function (state = initialState, {type,payload}) {
    switch (type) {

        case DELETE_ADMIN : {
            const newUser = state.admins.filter(elem=>elem.email!==payload.email);
            return{
                ...state,
                admins : [...newUser]
            }
        }
        case ADD_ADMIN : {
            return {
                ...state,
            }
        }
        case CHANGE_ADMIN : {
            const newUser = state.admins;
            newUser.map(elem=> elem.index===payload.id && payload.admin);
            return{
                ...state,
                admins : [...newUser.filter(elem=>elem.index!==payload.id)]
            };
        }
        case GET_ADMINS : {
            return {
                ...state,
                admins : payload.admins
            }
        }
        default : {
            return state
        }
    }
}