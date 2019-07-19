import axiosInstance from '.'

import {
    loginFailure,
    loginSuccess,
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

                cookies.set('jwtToken', userJwt);

                dispatch(requestFinished());
                dispatch(loginSuccess({data: response.data, jwtToken: userJwt }));
                dispatch(notificationAlert(notificationData))
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
