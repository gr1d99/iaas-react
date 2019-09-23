import {
    CLEAR_OPENING_ERRORS,
    CREATE_OPENING_FAILURE,
    CREATE_OPENING_SUCCESS,
    ALL_OPENINGS,
    ADD_OPENING_DETAIL,
    ADD_OPENING_ERRORS,
    ADD_UPDATE_OPENING_SUCCESS,
    REMOVE_UPDATE_OPENING_SUCCESS,
    REMOVE_DELETE_OPENING_SUCCESS,
    DELETE_OPENING,
    ADD_OPENING_NOT_FOUND,
    REMOVE_OPENING_NOT_FOUND
} from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_OPENING_SUCCESS:
            return { ...state, ...payload };
        case CREATE_OPENING_FAILURE:
            return { ...state, ...payload };
        case CLEAR_OPENING_ERRORS:
            return { ...state, errors: undefined, ...payload };
        case ALL_OPENINGS:
            return { ...state, ...payload };
        case ADD_OPENING_DETAIL:
            return { ...state, detail: payload };
        case ADD_OPENING_ERRORS:
            return { ...state, errors: payload };
        case ADD_UPDATE_OPENING_SUCCESS:
            return { ...state, update: true };
        case REMOVE_UPDATE_OPENING_SUCCESS:
            return { ...state, update: undefined };
        case DELETE_OPENING:
            return { ...initialState, delete: true };
        case REMOVE_DELETE_OPENING_SUCCESS:
            return { ...state, delete: undefined };
        case ADD_OPENING_NOT_FOUND:
            return { ...state, ...payload };
        case REMOVE_OPENING_NOT_FOUND:
            return { ...state, ...payload };
        default:
            return state;
    }
};
