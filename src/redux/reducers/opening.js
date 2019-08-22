import {CLEAR_OPENING_ERRORS, CREATE_OPENING_FAILURE, CREATE_OPENING_SUCCESS} from "../actionTypes";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OPENING_SUCCESS:
            return Object.assign(state, { data: action.payload });
        case CREATE_OPENING_FAILURE:
            return Object.assign(state, { data: action.payload });
        case CLEAR_OPENING_ERRORS:
            return {};
        default:
            return state;
    }
};
