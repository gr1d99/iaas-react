import {
    ADD_OPENING_DETAIL,
    ADD_OPENING_ERRORS,
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
    RESET_USER,
    REMOVE_UPDATE_OPENING_SUCCESS,
    REMOVE_DELETE_OPENING_SUCCESS,
    DELETE_OPENING,
    ADD_OPENING_NOT_FOUND, REMOVE_OPENING_NOT_FOUND
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
        payload: { data }
    }
};

export const resetUser = () => {
    return dispatch => {
        return dispatch({
            type: RESET_USER,
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

export const removeOpeningErrors = () => {
    return dispatch => { dispatch({ type: CLEAR_OPENING_ERRORS }) }
};

export const setAllOpenings = (data) => {
    return {
        type: ALL_OPENINGS,
        payload: data
    }
};

export const addOpeningDetail = (data) => {
    return {
        type: ADD_OPENING_DETAIL,
        payload: data
    }
};

export const addOpeningErrors = (errors) => {
    return {
        type: ADD_OPENING_ERRORS,
        payload: errors
    }
};

export const notificationAlert = ({message, kind}) => {
    return {
        type: NOTIFICATION_ALERT,
        payload: {
            kind,
            alertMessage: message
        }
    }
};

export const removeUpdateOpeningSuccess = () => {
    return dispatch => (
        dispatch({ type: REMOVE_UPDATE_OPENING_SUCCESS })
    )
};

export const removeDeleteOpeningSuccess = () => {
    return dispatch => { dispatch({ type: REMOVE_DELETE_OPENING_SUCCESS}) }
};

export const deleteOpening = () => {
    return { type: DELETE_OPENING, payload: {} }
};

export const notify = (message, kind) => {
    return dispatch => dispatch(notificationAlert({message, kind}))
};

export const clearNotificationAlert = () => {
    return dispatch => dispatch({ type: CLEAR_NOTIFICATION_ALERT })
};

export const addOpeningNotFound = () => {
    return { type: ADD_OPENING_NOT_FOUND, payload: { not_found: true }}
};

export const removeOpeningNotFound = () => {
    return dispatch => {
        dispatch({type: REMOVE_OPENING_NOT_FOUND, payload: { not_found: undefined }})
    }
};
