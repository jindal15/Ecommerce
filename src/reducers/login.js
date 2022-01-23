import { credential } from "../helpers/credentials";

export const USER_LOGIN = 'login/USER_LOGIN';

const initialValues = {
    isAuthenticated: false,
    userName: null
};

export default (state = initialValues, action) => {
    switch (action.type) {
        case USER_LOGIN:
            const { username, password } = action.payload
            if (credential.some(e => e.username === username && e.password === password)) {
                state.isAuthenticated = true;
                state.userName = action.payload.username;
            }
            return {
                ...state,
            };

        default:
            return state;
    }
};


export const login = (data) => {
    return {
        type: USER_LOGIN,
        payload: data || {}
    };
};