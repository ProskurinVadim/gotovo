import {GET_WEDDINGS_DAYS,SET_WEDDING_DAYS,ERROR_WEDDINGS_DAYS,LOADING_WEDDINGS_DAYS} from "../actionsNames";

const initialState = {
    unBlockDays : [],
    workDays : [],
};

export default function (state = initialState, {type,payload}) {
    switch(type) {
        case GET_WEDDINGS_DAYS : {
            console.log(payload.unBlockDays)
            return {
                ...state,
                unBlockDays : [...payload.unBlockDays],
                loading : false
            }
        }
        case SET_WEDDING_DAYS : {
            return {
                ...state
            }
        }
        case ERROR_WEDDINGS_DAYS : {
            return {
                ...state,
                errorMessage: payload.error
            }
        }
        case LOADING_WEDDINGS_DAYS : {
            return {
                ...state,
                loading : true
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}