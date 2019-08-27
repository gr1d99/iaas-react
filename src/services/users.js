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
            const jwtToken = response.headers['x-access-token'];
            const notificationData = {
                message: USERS.created,
                kind: NOTIFICATION_KINDS.success
            };
            const { data } = response.data;

            cookies.set("jwtToken", jwtToken);

            dispatch(requestFinished());

            dispatch(createUserSuccess(data, jwtToken));

            dispatch(notificationAlert(notificationData))
        }).catch((error) => {
            switch (error.response.status) {
                case 422:
                    const { data } = error.response;

                    dispatch(createUserFailure(data));

                    break;
                default:
                    dispatch(createUserFailure(error));
            }

        })
    }
};
