import {
    NOTIFICATION_ALERT,
    CLEAR_NOTIFICATION_ALERT
} from '../actionTypes';

const initialState = {
    alertMessage: '',
    kind: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NOTIFICATION_ALERT:
            return Object.assign(
                {},
                state,
                {
                    alertMessage: action.alertMessage,
                    kind: action.kind
                }
            );

        case CLEAR_NOTIFICATION_ALERT:
            return Object.assign(
                {},
                state,
                {
                    alertMessage: '',
                    kind: ''
                }
            );

        default:
            return state;
    }
}
