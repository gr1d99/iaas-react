import {CLEAR_OPENING_ERRORS, CREATE_OPENING_FAILURE, CREATE_OPENING_SUCCESS, ALL_OPENINGS} from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_OPENING_SUCCESS:
            return { ...state, ...payload };
        case CREATE_OPENING_FAILURE:
            return Object.assign(state, { data: action.payload });
        case CLEAR_OPENING_ERRORS:
            return {};
        case ALL_OPENINGS:
            return { ...state, ...payload };
        default:
            return state;
    }
};
