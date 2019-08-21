import {
    REQUEST_STARTED,
    REQUEST_DONE
} from "../actionTypes";

const initialState = {
    processing: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_STARTED:
            return Object.assign(state, { processing: true });
        case REQUEST_DONE:
            return Object.assign(state, { processing: false });
        default:
            return state;
    }
}
