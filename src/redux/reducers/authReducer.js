import {AUTH_SUCCESS,AUTH_FAILED,AUTH_LOADING,DELETE_ADMIN} from "../actionsNames";
const initialState = {
    users : [{
        index:1,
        phone:"+28855987878",
        name : "Say My NAme",
        email: "admin@gmail.com",
        password: "admin",
        superAdmin: true,
    },
        {
            index:4,
            phone:"+28855987878",
            name : "Say My NAme 1",
            email: "admin1@gmail.com",
            password: "admin",
            superAdmin: true,
        },
        {
            index:2,
            phone:"+28855987878",
            name : "Say My NAme 2",
            email: "admin2@gmail.com",
            password: "admin",
        },
        {
            index:3,
            phone:"+28855987878",
            name : "Say My NAme 3",
            email: "admin3@gmail.com",
            password: "admin",
        },
    ],
    currentUser : {},
    errorMessage : "",
    loading : false,
};

export default function (state = initialState, {type,payload}) {
    switch (type) {
        case AUTH_SUCCESS : {
            let currentUser = {};
            let errorMessage = "";
            const users = state.users;
            users.map(elem => {
                if (elem.email === payload.email) {
                    if (elem.password === payload.password) {
                        currentUser = elem;
                        errorMessage = ""
                    } else {
                        errorMessage = "Невірний пароль"
                    }
                } else {
                    errorMessage = !currentUser && "Невірний пароль чи імейл"
                }
            });
            const newState = {
                users: state.users,
                currentUser: currentUser,
                errorMessage: errorMessage,
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
            newUser.filter(elem=>elem.index!==payload.id)
            return{
                ...state,
                users : [...newUser.filter(elem=>elem.index!==payload.id)]
            }
        }
        default : {
            return state
        }
    }
}