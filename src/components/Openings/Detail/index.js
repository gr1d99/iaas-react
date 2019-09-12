import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { fetchOpeningDetail } from "../../../services/openings";

import { removeDeleteOpeningSuccess } from "../../../redux/actions";

import OpeningDetailCard from "./OpeningDetailCard";

import "./css/index.css"


const OpeningDetail = ({ opening, fetchOpeningDetail, match, history, removeDeleteOpeningSuccess }) => {
    const { id } = match.params;

    React.useEffect(() => {
       fetchOpeningDetail(id)
    }, [fetchOpeningDetail, id]);

    React.useEffect(() => {
        return () => {
            removeDeleteOpeningSuccess()
        }
    }, []);

    if (opening.detail) {
        const { data } = opening.detail;
        return <OpeningDetailCard history={history} data={ data }/>
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
    removeDeleteOpeningSuccess
})(OpeningDetail)
