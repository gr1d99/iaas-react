import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    REQUEST_STARTED,
    REQUEST_DONE,
    STATUSES
} from './actionTypes';

const BASE_URL = process.env.REACT_APP_DEVELOPMENT_ENDPOINT;

const requestStarted = () => {
    return {
        type:   REQUEST_STARTED,
        status: STATUSES.loading
    }
};

const requestFinished = () => {
    return {
        type:   REQUEST_DONE,
        status: STATUSES.done
    }
};

const loginSuccess = (opts) => {
    return {
        type:     LOGIN_SUCCESS,
        status:   STATUSES.success,
        data:     opts.data,
        jwtToken: opts.jwtToken,
    }
};

const loginFailure = (opts) => {
    return {
        type:     LOGIN_FAILURE,
        status:   STATUSES.failure,
        data:     opts.data,
        jwtToken: opts.jwtToken,
    }
};

const logoutSuccess = () => {
    return {
        type:   LOGOUT_SUCCESS,
        status: STATUSES.success
    }
};

export const createUserSession = (sessionData, cookies) => {
    const url = `${BASE_URL}/sessions`;
    return (dispatch) => {
        dispatch(requestStarted());
        return axios.post(url, sessionData)
            .then((response) => {
                dispatch(requestFinished());
                const userJwt = response.headers['x-access-token'];
                cookies.set('jwtToken', userJwt);
                dispatch(
                    loginSuccess({
                        data:     response.data,
                        jwtToken: userJwt,
                    })
                );
            }).catch((error) => {
                dispatch(requestFinished());
                dispatch(loginFailure(
                    {
                        data:     error.response.data,
                        jwtToken: null,
                    })
                )
            })
    }
};


export const destroySession = (cookies) => {
    cookies.remove('jwtToken');
    return (dispatch) => {
        dispatch(logoutSuccess())
    }
};
