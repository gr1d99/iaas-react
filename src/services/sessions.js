import axiosInstance from '.'

import {
    loginFailure,
    loginSuccess,
    logoutSuccess,
    notificationAlert,
} from '../redux/actions';

import {
    NOTIFICATION_KINDS,
    SESSIONS
} from "../constants/notificationMessages";


export const createUserSession = (sessionData, cookies) => {
    return (dispatch) => {
        return axiosInstance.post('/sessions', { session: { ...sessionData }})
            .then((response) => {
                const { data } = response.data;

                const userJwt = response.headers['x-access-token'];
                const notificationData = { message: SESSIONS.created, kind: NOTIFICATION_KINDS.success };

                cookies.set('jwtToken', userJwt);

                dispatch(loginSuccess(data, userJwt));

                dispatch(notificationAlert(notificationData))
            }).catch((error) => {
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
