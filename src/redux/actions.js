import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    REQUEST_STARTED,
    REQUEST_DONE,
    STATUSES,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS
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
        jwtToken: opts.jwtToken
    }
};

const loginFailure = (opts) => {
    return {
        type:     LOGIN_FAILURE,
        status:   STATUSES.failure,
        data:     opts.data,
        jwtToken: opts.jwtToken
    }
};

const logoutSuccess = () => {
    return {
        type:   LOGOUT_SUCCESS,
        status: STATUSES.success
    }
};

const createUserFailure = (errors) => {
    return {
        type:             CREATE_USER_FAILURE,
        createUserErrors: errors,
        status:           STATUSES.failure
    }
};

const createUserSuccess = (opts) => {
    return {
        type:     CREATE_USER_SUCCESS,
        status:   STATUSES.success,
        data:     opts.data,
        jwtToken: opts.jwtToken
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

export const createUserAccount = (userData, cookies) => {
    const url = `${BASE_URL}/users`;

    return dispatch => {
        dispatch(requestStarted());

        return axios.post(
            url,
            { user: userData }
        ).then((response) => {
            dispatch(requestFinished());

            const userJwt = response.headers['x-access-token'];

            cookies.set('jwtToken', userJwt);

            dispatch(createUserSuccess({
                data:     response.data,
                jwtToken: userJwt,
                })
            );
        }).catch((error) => {
            switch (error.response.status) {
                case 422:
                    const { errors } = error.response.data;

                    dispatch(createUserFailure(errors));

                    break;
                default:
                    dispatch(createUserFailure(error));
            }

        })
    }
};
