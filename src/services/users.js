import axios from '.';

import {
    createUserFailure,
    createUserSuccess,
    notificationAlert,
} from "../redux/actions";

import {
    NOTIFICATION_KINDS,
    USERS
} from "../constants/notificationMessages";
import {setAuthToken} from "../helpers/auth";

export const createUserAccount = (userData, cookies) => {
    return dispatch => {

        return axios.post(
            '/users',
            { user: userData }
        ).then((response) => {
            const jwtToken = response.headers['x-access-token'];
            const notificationData = { message: USERS.created, kind: NOTIFICATION_KINDS.success };

            setAuthToken(jwtToken)

            dispatch(createUserSuccess());
            dispatch(notificationAlert(notificationData))
        }).catch((error) => {
            switch (error.response.status) {
                case 422:
                    const { data } = error.response;

                    dispatch(createUserFailure(data));
                    return;
                default:
                    dispatch(createUserFailure(error));
            }

        })
    }
};
