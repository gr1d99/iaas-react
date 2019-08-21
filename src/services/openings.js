import axiosInstance from "."

import { createOpeningFailure, requestFinished, requestStarted } from "../redux/actions";

export const createOpening = (data) => {
    return dispatch => {
        dispatch(requestStarted());

        axiosInstance.post("/openings", { opening: data })
            .then((response) => {
                dispatch(requestFinished());
            }).catch((error) => {
                dispatch(requestFinished());
                dispatch(createOpeningFailure(data));
        });
    }
};
