import axiosInstance from "."

import {
    createOpeningFailure,
    createOpeningSuccess,
    notificationAlert,
    requestFinished,
    requestStarted, setAllOpenings
} from "../redux/actions";

export const createOpening = (data, history) => {
    return dispatch => {
        dispatch(requestStarted());

        return axiosInstance.post("/openings", { opening: data })
            .then((response) => {
                dispatch(createOpeningSuccess(response));
                dispatch(requestFinished());
                dispatch(notificationAlert({ message: "Opening created successfully", kind: "success"}));
                history.push("/")
            }).catch((error) => {
                dispatch(createOpeningFailure(error.response.data));
                dispatch(requestFinished());
            });
    }
};

export const fetchAllOpenings = (paginationQuery) => {
    const url = paginationQuery ? `/openings?${paginationQuery}` : "/openings";

    return dispatch => {
        dispatch(requestStarted());
        return axiosInstance.get(url)
            .then((response) => {
                dispatch(setAllOpenings(response.data));
                dispatch(requestFinished())
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
};

