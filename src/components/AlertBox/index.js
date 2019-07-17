import React from 'react';
import { Alert } from 'reactstrap';

const AlertBox = ({ color, message }) => {
    return <div>
        <Alert color={color}>
            {{ message }}
        </Alert>
    </div>
};

export default AlertBox;
