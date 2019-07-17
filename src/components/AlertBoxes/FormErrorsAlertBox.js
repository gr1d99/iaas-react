import React from 'react';
import { Alert } from 'reactstrap';

import {
    firstLetterCapitalizer
} from '../../helpers/capitalizer';

class FormErrorsAlertBox extends React.Component {
    normalizeInputName(name) {
        return firstLetterCapitalizer(name).split('_').join(' ')
    }

    render() {
        const errors = Object.entries(this.props.errors);
        const listErrorMessages = errors.map((message, index) =>
            <li key={index}>{this.normalizeInputName(message[0])} {message[1]}</li>
        );

        return (
            <Alert color='danger'
                   isOpen={this.props.hasErrors()}
                   toggle={this.props.removeErrors}>
                <ul>
                    {listErrorMessages}
                </ul>
            </Alert>
        );
    }
}

export default FormErrorsAlertBox;
