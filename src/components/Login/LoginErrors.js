import React from "react";

import PropTypes from "prop-types";

import { Alert } from "reactstrap";

import randomStringGenerator from "./../../helpers/randomStringGenerator";

const LoginErrors = (props) => {
    const { errors, removeLoginErrors } = props;

    return (
        <Alert color='danger' isOpen={ errors.length > 0 } toggle={ removeLoginErrors }>
            <ul>
                { errors.map((error) => (<li key={randomStringGenerator()}>{ error }</li>)) }
            </ul>
        </Alert>
    )
};

LoginErrors.propTypes = {
    errors: PropTypes.array.isRequired,
    removeLoginErrors: PropTypes.func.isRequired
};

export default LoginErrors;
