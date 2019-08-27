import React from "react";

import PropTypes from "prop-types";

import { Alert } from "reactstrap";


class AsyncFormErrors extends React.Component {
    render() {
        const { color, clearAsyncErrors, errors } = this.props;

        return (
            <Alert color={ color } isOpen={ !!errors } toggle={ clearAsyncErrors }>
                <ul>{ this.renderErrorLists() }</ul>
            </Alert>
        )
    }

    renderErrorLists = () => {
        const errors = Object.entries(this.props.errors);

        return errors.map((message) => {
            return message[1].map((innerMessage, index) => {
                return <li key={index}>{innerMessage}</li>
            })
        });
    };
}

AsyncFormErrors.propTypes = {
    color: PropTypes.string.isRequired,
    clearAsyncErrors: PropTypes.func.isRequired,
    errors: PropTypes.any.isRequired
};


export default AsyncFormErrors;
