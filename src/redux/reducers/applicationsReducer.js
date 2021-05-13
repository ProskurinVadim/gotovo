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
const initialState = {
    applications : [
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "нова",comments:"Не приглашайте родственников",id : "1"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "в работе",comments:"Не приглашайте родственников",id : "2"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "запросить еще документы",comments:"Не приглашайте родственников",id : "3"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "одобрена",comments:"Не приглашайте родственников",id : "4"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "оплачена",comments:"Не приглашайте родственников",id : "5"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "срок оплаты истек",comments:"Не приглашайте родственников",id : "6"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "нова",comments:"Не приглашайте родственников",id : "7"},
        {data : "01.08.2020", pib: "Имя Отчество Фамилия Имя Отчество Фамилия",pack:"Стандарт",phone:"099-733-12-42",status: "нова",comments:"Не приглашайте родственников",id : "8"},
    ],
    currentApplication : {},
    modal : false,
    loading : false,
    error : ""
};

export default function (state = initialState,{type,payload}){
    switch (type) {
        case GET_APPLICATIONS : {
            return {
                ...state,
                applications: payload.applications,
                error : "",
                loading : false,
            }
        }
        case LOADING_APPLICATIONS : {
            return {
                ...state,
                loading : true,
            }
        }
        case ERROR_APPLICATION : {
            return {
                ...state,
                error : payload.error,
            }
        }
        case SET_APPLICATION : {
            return {
                ...state,
                modal : true,
                currentApplication : payload.application
            }
        }
        case UNSET_APPLICATION : {
            return {
                ...state,
                modal : false,
                currentApplication : {}
            }
        }
        case DELETE_APPLICATION : {
            const newApplications = state.applications.splice(index, 1);
            return {
                ...state,
                applications : newApplications
            }
        }
        case DELETE_APPLICATIONS : {
            const newApplications = state.applications.filter(elem => !payload.ids.includes(elem.id) && elem)
            return {
                ...state,
                applications : newApplications
            }
        }
        case ADD_APPLICATION : {
            const newApplications = [...state.applications,payload.application];
            return {
                ...state,
                applications : newApplications,
            }
        }
        case CHANGE_APPLICATION_STATUS : {
            const newApplications = state.applications.map(elem => {
                    if (elem.id === payload.id) elem.status = payload.status;
                    return elem
                });
            return {
                ...state,
                applications : newApplications,
            }
        }
        case TOGGLE_MODAL_APPLICATIONS : {
            return {
                ...state,
                modal : !state.modal,
            }
        }
        default : {
            return state
        }
    }
}