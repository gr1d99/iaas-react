import React from "react";

import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

import { clearOpeningErrors, notify } from "../../../redux/actions";

import { createOpening } from "../../../services/openings";

import OpeningForm from "./OpeningForm";

import useAdminAuthorization from "../../../hooks/useAdminAuthorization";
import useAuthentication from "../../../hooks/useAuthentication";

import {NOTIFICATION_KINDS, OPENINGS} from "../../../constants/notificationMessages";


const NewOpening = (props) => {
    const { notify, createOpening, clearOpeningErrors } = props;
    const { data } = props.opening;
    const authenticated = useAuthentication();
    const admin = useAdminAuthorization();

    if (!authenticated) {
        return <Redirect to="/sign_in"/>
    }

    if (!admin) {
        notify(OPENINGS.create.unauthorized, NOTIFICATION_KINDS.danger);
        return <Redirect to="/"/>
    }

    if (data && data.attributes) { return <Redirect to="/"/> }

    return (
        <div>
            <OpeningForm clearOpeningErrors={clearOpeningErrors} data={data} createOpening={createOpening}/>
        </div>
    );
};

const mapStateToProps = ({ opening }) => ({ opening });

export default connect(
    mapStateToProps, {
        createOpening,
        clearOpeningErrors,
        notify
    })(NewOpening);
