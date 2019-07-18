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
        const listErrorMessages = errors.map((message, index) => {
            if (Array.isArray(message[1])) {
                return message[1].map((innerMessage, index) => {
                    return <li key={index}>{innerMessage}</li>
                })
            }

            if (message[0].startsWith('_')) {
                return <li key={index}>{message[1]}</li>
            }
            return <li key={index}>{this.normalizeInputName(message[0])} {message[1]}</li>
            }
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
