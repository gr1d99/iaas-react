import { Cookies } from 'react-cookie';

import {
    LOGIN_FAILURE,
    REQUEST_STARTED,
    REQUEST_DONE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    REMOVE_LOGIN_ERRORS,
    REMOVE_CREATE_USER_ACCOUNT_ERRORS,
} from './../actionTypes';


const cookies = new Cookies();

const initialState = {
    jwtToken: null || cookies.get('jwtToken'),
};

const user = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case REQUEST_STARTED:
            return Object.assign({},
                state,
                {
                    status: action.status
                });

        case REQUEST_DONE:
            return Object.assign({},
                state,
                {
                    status: action.status
                });

        case LOGIN_SUCCESS:
            return { ...state, ...payload };

        case LOGIN_FAILURE:
            return { ...state, ...payload };

        case REMOVE_LOGIN_ERRORS:
            return {};

        case LOGOUT_SUCCESS:
            return Object.assign({},
                state,
                {
                    jwtToken: null,
                    data:     {}
                });

        case CREATE_USER_FAILURE:
            return { ...state, ...payload };

        case CREATE_USER_SUCCESS:
            return { ...state, ...payload };

        case REMOVE_CREATE_USER_ACCOUNT_ERRORS:
            return initialState;

        default:
            return state;
    }
};

export default user;
