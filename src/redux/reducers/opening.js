import {
    CLEAR_OPENING_ERRORS,
    CREATE_OPENING_FAILURE,
    CREATE_OPENING_SUCCESS,
    ALL_OPENINGS,
    ADD_OPENING_DETAIL
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
            return initialState;
        case ALL_OPENINGS:
            return { ...state, ...payload };
        case ADD_OPENING_DETAIL:
            return { ...state, detail: payload };
        default:
            return state;
    }
};
