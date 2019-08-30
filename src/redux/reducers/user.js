import { Cookies } from 'react-cookie';

import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    RESET_USER
} from './../actionTypes';

import { getJwtToken } from "../../helpers/auth";

const cookies = new Cookies();

const initialState = {
    jwtToken: cookies.get("jwtToken")
};

const user = (state = initialState, action) => {
    const { type, payload } = action;
    const jwtToken = getJwtToken();

    switch (type) {
        case RESET_USER:
            return initialState;

        case LOGIN_SUCCESS:
            return { ...state, jwtToken };

        case LOGIN_FAILURE:
            return { ...state, jwtToken, ...payload };

        case LOGOUT_SUCCESS:
            return { ...initialState, jwtToken, ...payload };

        case CREATE_USER_FAILURE:
            return { ...state, ...payload };

        case CREATE_USER_SUCCESS:
            return { ...initialState, jwtToken, ...payload };

        default:
            return state;
    }
};

export default user;
