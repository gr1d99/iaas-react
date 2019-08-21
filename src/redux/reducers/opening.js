import { CREATE_OPENING_FAILURE } from "../actionTypes";

const initialState = {
    errors: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_OPENING_FAILURE:
            return Object.assign(state, { errors: action.payload });
        default:
            return state;
    }
};
