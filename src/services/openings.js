import axiosInstance from "."

import {
    addOpeningDetail,
    createOpeningFailure,
    createOpeningSuccess,
    notificationAlert,
    addOpeningErrors,
    setAllOpenings,
    deleteOpening,
} from "../redux/actions";
import {
    ADD_UPDATE_OPENING_SUCCESS,
    DELETE_OPENING,
} from "../redux/actionTypes";

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

export const updateOpeningDetail = (id, data) => {
    const url = `/openings/${id}`;

    return dispatch => {
        return axiosInstance.put(url, { opening: data })
            .then((response) => {
                dispatch(addOpeningDetail(response.data));
                dispatch(notificationAlert({ message: "Opening updated successfully", kind: "success"}));
                dispatch({ type: ADD_UPDATE_OPENING_SUCCESS })
            })
            .catch((error) => {
                dispatch(addOpeningErrors(error.response.data.errors))
            }
        )
    }
};

export const destroyOpening = (id) => {
    const url = `/openings/${id}`;

    return dispatch => {
        return axiosInstance.delete(url)
            .then(() => {
                dispatch(deleteOpening());
                dispatch(notificationAlert({ message: "Opening deleted successfully", kind: "success"}))
            })
            .catch((error) => {
                throw error
            })
    }
};
