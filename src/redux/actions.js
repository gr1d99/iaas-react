import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    REQUEST_STARTED,
    REQUEST_DONE,
    STATUSES,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    NOTIFICATION_ALERT,
    CLEAR_NOTIFICATION_ALERT,
    CREATE_OPENING_FAILURE,
    CREATE_OPENING_SUCCESS,
    CLEAR_OPENING_ERRORS,
} from './actionTypes';


export const requestStarted = () => {
    return {
        type: REQUEST_STARTED,
    }
};

export const requestFinished = () => {
    return {
        type: REQUEST_DONE,
    }
};

export const loginSuccess = (opts) => {
    return {
        type:     LOGIN_SUCCESS,
        status:   STATUSES.success,
        data:     opts.data,
        jwtToken: opts.jwtToken
    }
};

export const loginFailure = (opts) => {
    return {
        type:     LOGIN_FAILURE,
        status:   STATUSES.failure,
        data:     opts.data,
        jwtToken: opts.jwtToken
    }
};

export const logoutSuccess = () => {
    return {
        type:   LOGOUT_SUCCESS,
        status: STATUSES.success
    }
};

export const createUserFailure = (errors) => {
    return {
        type:             CREATE_USER_FAILURE,
        createUserErrors: errors,
        status:           STATUSES.failure
    }
};

export const createUserSuccess = (opts) => {
    return {
        type:     CREATE_USER_SUCCESS,
        status:   STATUSES.success,
        data:     opts.data,
        jwtToken: opts.jwtToken
    }
};

export const createOpeningFailure = (data) => {
    return {
        type: CREATE_OPENING_FAILURE,
        payload: data
    }
};

export const createOpeningSuccess = (data) => {
    return {
        type: CREATE_OPENING_SUCCESS,
        payload: data
    }
};

export const clearOpeningErrors = () => {
    return dispatch => {
        dispatch({ type: CLEAR_OPENING_ERRORS })
    }
};

export const notificationAlert = ({message, kind}) => {
    return {
        type: NOTIFICATION_ALERT,
        alertMessage: message,
        kind
    }
};

export const clearNotificationAlert = (dispatch) => {
    return dispatch => dispatch({ type: CLEAR_NOTIFICATION_ALERT })
};

