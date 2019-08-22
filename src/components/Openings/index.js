import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

import { clearOpeningErrors } from "../../redux/actions";

import { createOpening } from "../../services/openings";

import withAuthentication from "../HOCs/withAuthentication";

import OpeningForm from "./OpeningForm";


class NewOpening extends React.Component {
    state = {
        title: "",
        company: "",
        location: "",
        description: "",
        qualifications: "",
        start_date: "",
        end_date: "",
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

    render() {
        const { data } = this.props.opening;

        return (
            <div>
                <OpeningForm clearAsyncErrors={this.clearAsyncErrors} data={data} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange}/>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.createOpening(this.state, this.props.history)
    };

    handleInputChange = (event) => {
        const inputData = {};

        inputData[event.target.name] = event.target.value;

        this.setState(inputData)
    };

    clearAsyncErrors = () => {
        this.props.clearOpeningErrors()
    }
}

const mapStateToProps = ({ user, opening }) => {
        return {
            user,
            opening,
        }
};

export default connect(
    mapStateToProps, {
        createOpening,
        clearOpeningErrors
    })(withRouter(withAuthentication(NewOpening)));
