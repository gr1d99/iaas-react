import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import OpeningForm from "./OpeningForm";

import { createOpening } from "../../services/openings";

class NewOpening extends React.Component {
    state = {
        title: "",
        company: "",
        location: "",
        description: "",
        qualifications: "",
        start_date: "",
        end_date: "",
        errors: null
    };

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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createOpening(this.state)
    };

    handleInputChange = (event) => {
        const inputData = {};
        inputData[event.target.name] = event.target.value;
        this.setState(inputData)
    };

    render() {
        return <div>
            <OpeningForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
        </div>
    }
}

const mapStateToProps = ({ user, opening }, ownProps) => {
        return {
            user,
            opening,
            userLoggedIn: ownProps.userLoggedIn(user),
            isAdmin: ownProps.isAdmin(user)
        }
};

export default connect(mapStateToProps, { createOpening })(withRouter(NewOpening));
