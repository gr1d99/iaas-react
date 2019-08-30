import React from "react";

import PropTypes from "prop-types";

import { Alert } from "reactstrap";

import randomStringGenerator from "./../../helpers/randomStringGenerator";

const SignInErrors = (props) => {
    const { errors, removeLoginErrors } = props;

    return (
        <Alert color='danger' isOpen={ true } toggle={ removeLoginErrors }>
            <ul>
                { errors.map((error) => (<li key={randomStringGenerator()}>{ error }</li>)) }
            </ul>
        </Alert>
    )
};

SignInErrors.propTypes = {
    errors: PropTypes.array.isRequired,
    removeLoginErrors: PropTypes.func.isRequired
};

export default SignInErrors;
