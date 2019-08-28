import axiosInstance from "."

import {
    createOpeningFailure,
    createOpeningSuccess,
    notificationAlert,
    requestFinished,
    requestStarted, setAllOpenings
} from "../redux/actions";

export const createOpening = (data) => {
    return dispatch => {
        return axiosInstance.post("/openings", { opening: data })
            .then((response) => {
                const { data } = response;

                dispatch(createOpeningSuccess(data));

                dispatch(notificationAlert({ message: "Opening created successfully", kind: "success"}));
            }).catch((error) => {
                dispatch(createOpeningFailure(error.response.data));
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

