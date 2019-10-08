import axiosInstance from '.'

import {
    loginFailure,
    loginSuccess,
    logoutSuccess,
    notificationAlert
} from '../redux/actions';

import {
    NOTIFICATION_KINDS,
    SESSIONS
} from "../constants/notificationMessages";

import {removeAuthToken, setAuthToken} from "../helpers/auth";


export const createUserSession = (sessionData) => {
    return (dispatch) => {
        return axiosInstance.post('/sign_in', { session: { ...sessionData }})
            .then((response) => {
                const userJwt = response.headers['x-access-token'];
                const notificationData = { message: SESSIONS.created, kind: NOTIFICATION_KINDS.success };

                setAuthToken(userJwt);

                dispatch(loginSuccess());
                dispatch(notificationAlert(notificationData))
            }).catch((error) => {
                dispatch(loginFailure(error.response.data))
            })
    }
};

export const destroySession = () => {
    removeAuthToken();
    return (dispatch) => dispatch(logoutSuccess())
};
