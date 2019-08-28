import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    REQUEST_STARTED,
    REQUEST_DONE,
    CREATE_USER_FAILURE,
    CREATE_USER_SUCCESS,
    NOTIFICATION_ALERT,
    CLEAR_NOTIFICATION_ALERT,
    CREATE_OPENING_FAILURE,
    CREATE_OPENING_SUCCESS,
    CLEAR_OPENING_ERRORS,
    ALL_OPENINGS,
    REMOVE_LOGIN_ERRORS,
    REMOVE_USER_ERRORS
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

export const loginSuccess = () => {
    return { type: LOGIN_SUCCESS, payload: {} }
};

export const loginFailure = (data) => {
    return { type: LOGIN_FAILURE, payload: { data } }
};

export const removeLoginErrors = () => {
    return dispatch => {
        dispatch({ type: REMOVE_LOGIN_ERRORS, payload: { jwtToken: null } })
    }
};

export const logoutSuccess = () => {
    return { type: LOGOUT_SUCCESS, payload: {} }
};

export const createUserFailure = (data) => {
    return { type: CREATE_USER_FAILURE, payload: { data }}
};

export const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
        payload: {}
    }
};

export const createOpeningFailure = (data) => {
    return {
        type: CREATE_OPENING_FAILURE,
        payload: data
    }
};

export const removeCreateUserAccountErrors = () => {
    return dispatch => {
        return dispatch({
            type: REMOVE_USER_ERRORS,
            payload: {}
        })
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

export const setAllOpenings = (data) => {
    return {
        type: ALL_OPENINGS,
        payload: data
    }
};

export const notificationAlert = ({message, kind}) => {
    return {
        type: NOTIFICATION_ALERT,
        alertMessage: message,
        kind
    }
};

export const clearNotificationAlert = () => {
    return dispatch => dispatch({ type: CLEAR_NOTIFICATION_ALERT })
};
