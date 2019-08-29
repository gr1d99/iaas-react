import { LOGIN, LOGOUT } from "../types";

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return { ...state, ...payload };
        case LOGOUT:
            return { ...state, ...payload };
        default:
            return state
    }
};
