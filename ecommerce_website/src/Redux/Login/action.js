

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";

export const loginloading = () => ({
    type: "LOGIN_LOADING"
});

export const loginsuccess = (payload) => ({
    type: "LOGIN_SUCCESS",payload
});

export const loginerror = () => ({
    type: "LOGIN_ERROR"
});

export const logout = () => ({
    type: "LOGOUT"
});