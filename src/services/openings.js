import axiosInstance from "."

import {
    createOpeningFailure,
    createOpeningSuccess,
    notificationAlert,
    requestFinished,
    requestStarted
} from "../redux/actions";

export const createOpening = (data, history) => {
    return dispatch => {
        dispatch(requestStarted());

        return axiosInstance.post("/openings", { opening: data })
            .then((response) => {
                dispatch(createOpeningSuccess(response.data.data));
                dispatch(requestFinished());
                dispatch(notificationAlert({ message: "Opening created successfully", kind: "success"}));
                history.push("/")
            }).catch((error) => {
                dispatch(createOpeningFailure(error.response.data));
                dispatch(requestFinished());
            });
    }
};
