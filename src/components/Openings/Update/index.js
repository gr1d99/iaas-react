import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { Container } from "reactstrap";

import { fetchOpeningDetail, updateOpeningDetail } from "../../../services/openings";

import  { removeOpeningErrors, removeUpdateOpeningSuccess } from "../../../redux/actions";

import UpdateOpeningForm from "../Update/UpdateOpeningForm";


const UpdateOpening = ({opening, fetchOpeningDetail, updateOpeningDetail, removeOpeningErrors, removeUpdateOpeningSuccess, history, match }) => {
    const { id } = match.params;
    let data;

    React.useEffect(() => {
        fetchOpeningDetail(id)
    }, [id]);

    React.useEffect(() => {
        return () => {
            removeUpdateOpeningSuccess();
            removeOpeningErrors()
        }
    }, []);

    const updateOpening = (data) => {
        updateOpeningDetail(id, data)
    };

    data = opening.detail ? opening.detail.data : undefined;

    if (data) {
        if (opening.update) {
            return (
                <Redirect to={`/openings/${id}`}/>
            )
        }

        return (
            <Container className="openings__edit">
                <UpdateOpeningForm
                    updateOpeningDetail={updateOpening}
                    removeOpeningErrors={removeOpeningErrors}
                    errors={opening.errors}
                    data={data}/>
            </Container>
        )
    } else {
        return (
            <div>Loading</div>
        )
    }
};

UpdateOpening.propTypes = {
    opening: PropTypes.object.isRequired,
    fetchOpeningDetail: PropTypes.func.isRequired,
};

const mapStateToProps = ({ opening }) => {
  return { opening }
};

export default connect(mapStateToProps, {
    fetchOpeningDetail,
    removeOpeningErrors,
    removeUpdateOpeningSuccess,
    updateOpeningDetail,
})(UpdateOpening);
