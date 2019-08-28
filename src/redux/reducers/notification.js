import {
    NOTIFICATION_ALERT,
    CLEAR_NOTIFICATION_ALERT
} from "../actionTypes";

const initialState = {
    alertMessage: "",
    kind: ""
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case NOTIFICATION_ALERT:
            return { ...state, ...payload };

        case CLEAR_NOTIFICATION_ALERT:
            return initialState;

        default:
            return state;
    }
}
