import React from "react";

import { Alert } from "reactstrap";


class AsyncFormErrors extends React.Component {
    render() {
        return (
            <Alert color={ this.props.color } isOpen={ !!this.props.errors } toggle={ this.props.clearAsyncErrors }>
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

export default AsyncFormErrors;
