import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { fetchOpeningDetail } from "../../../services/openings";

import { removeDeleteOpeningSuccess, removeOpeningNotFound } from "../../../redux/actions";

import OpeningDetailCard from "./OpeningDetailCard";
import OpeningNotFound from "./OpeningNotFound";


const OpeningDetail = ({ opening, fetchOpeningDetail, match, history, removeDeleteOpeningSuccess, removeOpeningNotFound }) => {
    const { id } = match.params;

    React.useEffect(() => {
       fetchOpeningDetail(id)
    }, [fetchOpeningDetail, id]);

    React.useEffect(() => {
        return () => {
            removeDeleteOpeningSuccess();
            removeOpeningNotFound()
        }
    }, []);

    if (opening.detail) {
        const {data} = opening.detail;
        return <OpeningDetailCard history={history} data={data}/>
    } else if (opening.not_found) {
            return <OpeningNotFound/>
    } else if (opening.delete) {
        return <Redirect to="/openings"/>
    } else {
        return <div>Loading...</div>
    }
};

OpeningDetail.propTypes = {
    opening: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchOpeningDetail: PropTypes.func.isRequired
};

const mapStateToProps = ({ opening }) => ({ opening });

export default connect(mapStateToProps, {
    fetchOpeningDetail,
    removeDeleteOpeningSuccess,
    removeOpeningNotFound
})(OpeningDetail)
