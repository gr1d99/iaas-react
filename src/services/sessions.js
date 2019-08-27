import axiosInstance from '.'

import {
    loginFailure,
    loginSuccess,
    logoutSuccess,
    notificationAlert,
    requestStarted,
    requestFinished
} from '../redux/actions';

import {
    NOTIFICATION_KINDS,
    SESSIONS
} from "../constants/notificationMessages";


export const createUserSession = (sessionData, cookies) => {

    return (dispatch) => {
        dispatch(requestStarted());

        return axiosInstance.post('/sessions', sessionData)
            .then((response) => {
                const userJwt = response.headers['x-access-token'];
                const notificationData = {
                    message:   SESSIONS.created,
                    kind:      NOTIFICATION_KINDS.success
                };
                const { data } = response.data;

                cookies.set('jwtToken', userJwt);

                dispatch(requestFinished());

                dispatch(loginSuccess(data, userJwt));

                dispatch(notificationAlert(notificationData))
            }).catch((error) => {
                dispatch(requestFinished());

                dispatch(loginFailure(error.response.data, null))
            })
    }
};

export const destroySession = (cookies) => {
    cookies.remove('jwtToken');

    return (dispatch) => {
        dispatch(logoutSuccess())
    }
};
