import React from "react";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { clearOpeningErrors } from "../../../redux/actions";

import { createOpening } from "../../../services/openings";

import OpeningForm from "./OpeningForm";


const NewOpening = (props) => {
    const { createOpening } = props;
    const { data } = props.opening;

    if (data && data.attributes) { return <Redirect to="/"/> }

    return (
        <div>
            <OpeningForm clearOpeningErrors={ clearOpeningErrors } data={ data } createOpening={ createOpening }/>
        </div>
    );
};

const mapStateToProps = ({ opening }) => ({ opening });

export default connect(
    mapStateToProps, {
        createOpening,
        clearOpeningErrors,
    })(NewOpening);
