import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import OpeningForm from "./OpeningForm";

import { createOpening } from "../../services/openings";

import withAuthentication from "../HOCs/withAuthentication";

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
        if (!this.props.authenticated) {
            const alertOptions = {
                color: "danger",
                alertMessage: "You must be authenticated before creating an Opening"
            };

            const { color, alertMessage } = alertOptions;

            this.props.showAlertMessage({ color, alertMessage });

            this.props.history.push("/sign_in");

            return
        }

        if (!this.props.admin) {
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

const mapStateToProps = ({ user, opening }) => {
        return { user, opening }
};

export default connect(mapStateToProps, { createOpening })(withRouter(withAuthentication(NewOpening)));
