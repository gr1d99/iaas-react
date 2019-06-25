import { Cookies } from 'react-cookie';

import {
    LOGIN_FAILURE,
    REQUEST_STARTED,
    REQUEST_DONE, LOGIN_SUCCESS, LOGOUT_SUCCESS
} from './../actionTypes';


const cookies = new Cookies();

const initialState = {
    status:   '',
    data:     {},
    jwtToken: null || cookies.get('jwtToken'),
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
                    jwtToken: null
                });

        default:
            return state;
    }
};

export default user;
