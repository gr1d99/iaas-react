import React from "react";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { resetCreateOpening } from "../../../redux/actions";

import { createOpening } from "../../../services/openings";

import OpeningForm from "./OpeningForm";

import Container from "reactstrap/es/Container";

import routes from "../../../helpers/routePaths";


const NewOpening = ({ opening, createOpening, resetCreateOpening }) => {
    const createOpeningData = opening.create ? opening.create.data : undefined;

    if (createOpeningData && createOpeningData.attributes) { resetCreateOpening(); return <Redirect to={routes.openings.detail(createOpeningData.id)}/> }

    return (
        <Container className="openings__create">
            <OpeningForm clearOpeningErrors={ resetCreateOpening } data={ createOpeningData } createOpening={ createOpening }/>
        </Container>
    );
};

const mapStateToProps = ({ opening }) => ({ opening });

export default connect(
    mapStateToProps, {
        createOpening,
        resetCreateOpening
    })(NewOpening);
