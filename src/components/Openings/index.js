import React from "react";

import {
    connect
} from "react-redux";

import {
    withRouter
} from "react-router-dom";

import OpeningForm from "./OpeningForm";

class NewOpening extends React.Component {
    componentDidMount() {
        if (!this.props.userLoggedIn) {
            const alertOptions = {
                color: "danger",
                alertMessage: "You must be authenticated before creating an Opening"
            };

            const { color, alertMessage } = alertOptions;

            this.props.showAlertMessage({ color, alertMessage });

            this.props.history.push("/sign_in");

            return
        }

        if (!this.props.isAdmin) {
            this.props.history.push("/");

            const alertOptions = {
                color: "danger",
                alertMessage: "You do not have enough permissions to create an Opening"
            };

            const { color, alertMessage } = alertOptions;

            this.props.showAlertMessage({ color, alertMessage });
        }
    }

    render() {
        return <div>
            <OpeningForm/>
        </div>
    }
}

const mapStateToProps = ({ user }, ownProps) => {
    return {
        user,
        userLoggedIn: ownProps.userLoggedIn(user),
        isAdmin: ownProps.isAdmin(user),
    }
};

export default connect(
    mapStateToProps
)(withRouter(NewOpening));
