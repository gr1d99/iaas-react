import { Cookies } from 'react-cookie';

import {
    LOGIN_FAILURE,
    REQUEST_STARTED,
    REQUEST_DONE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS
} from './../actionTypes';


const cookies = new Cookies();

const initialState = {
    status:           '',
    data:             {},
    jwtToken:         null || cookies.get('jwtToken'),
    createUserErrors: {}
};

const user = (state = initialState, action) => {
    switch (action.type) {

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
            return Object.assign({},
                state,
                {
                    status:   action.status,
                    data:     action.data,
                    jwtToken: action.jwtToken
                });

        case LOGIN_FAILURE:
            return Object.assign({},
                state,
                {
                    status:   action.status,
                    data:     action.data,
                    jwtToken: action.jwtToken,
                });

        case LOGOUT_SUCCESS:
            return Object.assign({},
                state,
                {
                    jwtToken: null,
                    data:     {}
                });

        case CREATE_USER_FAILURE:
            return Object.assign({},
                state,
                {
                    createUserErrors: action.createUserErrors,
                    status:           action.status,
                });

        case CREATE_USER_SUCCESS:
            return Object.assign({},
                state,
                {
                    status:           action.status,
                    data:             action.data,
                    jwtToken:         action.jwtToken,
                    createUserErrors: {}
                });

        default:
            return state;
    }
};

export default user;
