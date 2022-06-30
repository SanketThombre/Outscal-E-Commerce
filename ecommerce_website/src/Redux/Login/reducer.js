import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR ,LOGOUT} from "./action";


const initState = {
    loading: false,
    error: false,
    isauthenticated: false,
    username: "",
    
}

export const loginreducer = (store=initState, {type,payload}) => {
    switch (type) {

        case LOGIN_LOADING:
            return { ...store, loading: true }
        case LOGIN_SUCCESS:
            return { ...store, loading: false, isAuthenticated: true, error: false, username: payload.username }
        case LOGIN_ERROR:
            return { ...store, loading: false, isAuthenticated: false, error: true, username: "" }
        case LOGOUT:
            return { ...initState }
        default:
            return store;
    }
}