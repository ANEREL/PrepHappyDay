import { REGISTER_FAIL, LOGIN_FAIL, REGISTER_LOADING, LOGIN_LOADING, LOGOUT_USER, REGISTER_SUCCESS, LOGIN_SUCCESS, CLEAR_AUTH_STATE } from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
        case REGISTER_LOADING:
            return { ...state, loading: true, };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                data: null,
                isLoggedIn: false
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
            }
        default:
            return state;
    }

};

export default auth;