import React from "react";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { removeOpeningErrors } from "../../../redux/actions";

import { createOpening } from "../../../services/openings";

import OpeningForm from "./OpeningForm";

import Container from "reactstrap/es/Container";


const NewOpening = (props) => {
    const { createOpening, clearOpeningErrors } = props;
    const { data } = props.opening;

    if (data && data.attributes) { return <Redirect to="/"/> }

    return (
        <Container className="openings__create">
            <OpeningForm clearOpeningErrors={ clearOpeningErrors } data={ data } createOpening={ createOpening }/>
        </Container>
    );
};

const mapStateToProps = ({ opening }) => ({ opening });

export default connect(
    mapStateToProps, {
        createOpening,
        clearOpeningErrors: removeOpeningErrors,
    })(NewOpening);
