import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { fetchOpeningDetail } from "../../../services/openings";
import OpeningDetailCard from "./OpeningDetailCard";

const OpeningDetail = ({ opening, fetchOpeningDetail, match }) => {
    const { id } = match.params;

    React.useEffect(() => {
       fetchOpeningDetail(id)
    }, [id]);

    if (opening.detail) {
        const { data } = opening.detail;
        return <OpeningDetailCard data={ data }/>
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
    fetchOpeningDetail
})(OpeningDetail)
