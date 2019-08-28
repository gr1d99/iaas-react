import { Cookies } from 'react-cookie';

import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    REMOVE_LOGIN_ERRORS,
    REMOVE_USER_ERRORS,
} from './../actionTypes';

const cookies = new Cookies();

const initialState = {
    jwtToken: cookies.get("jwtToken")
};

const user = (state = initialState, action) => {
    const { type, payload } = action;
    const jwtToken = cookies.get("jwtToken");

    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, jwtToken };

        case LOGIN_FAILURE:
            return { ...state, jwtToken, ...payload };

        case REMOVE_LOGIN_ERRORS:
            return initialState;

        case LOGOUT_SUCCESS:
            return { ...initialState, jwtToken, ...payload };

        case CREATE_USER_FAILURE:
            return { ...state, ...payload };

        case CREATE_USER_SUCCESS:
            return { ...initialState, jwtToken, ...payload };

        case REMOVE_USER_ERRORS:
            return initialState;

        default:
            return state;
    }
};

export default user;
