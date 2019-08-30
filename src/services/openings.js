import axiosInstance from "."

import {
    addOpeningDetail,
    createOpeningFailure,
    createOpeningSuccess,
    notificationAlert,
    setAllOpenings
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
        return axiosInstance.get(url)
            .then((response) => {
                dispatch(setAllOpenings(response.data));
            })
            .catch((error) => {
                throw error
            })
    }
};

export const fetchOpeningDetail = (id) => {
    const url = `/openings/${id}`;

    return dispatch => {
        return axiosInstance.get(url)
            .then((response) => {
                dispatch(addOpeningDetail(response.data))
            })
            .catch((error) => {
                throw error
            })
    }
};
