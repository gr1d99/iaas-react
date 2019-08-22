import React from "react";

import { connect } from "react-redux";

import { Alert } from 'reactstrap';

import {clearNotificationAlert} from "../../redux/actions";


class MessageAlertBox extends React.Component {
    render() {
        const { kind, alertMessage } = this.props.notification;

        return (
            <Alert
                color={kind}
                isOpen={alertMessage.length > 0}
                toggle={this.onDismiss}>
                {alertMessage}
            </Alert>
        )
    }

    onDismiss = () => {
        this.props.clearNotificationAlert()
    }
}

const mapStateToProps = ({ notification }) => {
    return { notification }
};

export default connect(mapStateToProps, { clearNotificationAlert })(MessageAlertBox);
