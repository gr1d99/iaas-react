import axios from '.';

import {
    createUserFailure,
    createUserSuccess,
    notificationAlert,
    requestFinished,
    requestStarted
} from "../redux/actions";

import {
    NOTIFICATION_KINDS,
    USERS
} from "../constants/notificationMessages";

export const createUserAccount = (userData, cookies) => {
    return dispatch => {
        dispatch(requestStarted());

        return axios.post(
            '/users',
            { user: userData }
        ).then((response) => {
            const userJwt = response.headers['x-access-token'];
            const notificationData = {
                message: USERS.created,
                kind:    NOTIFICATION_KINDS.success
            };

            cookies.set('jwtToken', userJwt);

            dispatch(requestFinished());
            dispatch(createUserSuccess({ data: response.data, jwtToken: userJwt }));
            dispatch(notificationAlert(notificationData))
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
