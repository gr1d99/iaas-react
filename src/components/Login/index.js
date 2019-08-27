import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { STATUSES } from "../../redux/actionTypes";

import { createUserSession } from '../../services/sessions';

import { removeLoginErrors } from '../../redux/actions';

import withAuthentication from "../HOCs/withAuthentication";

import LoginForm from './LoginForm';
import LoginErrors from "./LoginErrors";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    componentDidMount() {
        return this.props.authenticated ? this.props.history.push("/") : null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { status } = this.props.user;

        if (status === STATUSES.success) {
            return this.props.authenticated ? this.props.history.push("/") : null
        }
    }

    render() {
        const { data } = this.props.user;

        return (
            <div className="col-md-4 offset-4 mt-5">

                { data && data.errors ? <LoginErrors errors={data.errors} removeLoginErrors={this.props.removeLoginErrors}/> : "" }

                <LoginForm email={this.state.email} password={this.state.password} handleSubmit={this.handleSubmit} handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange}/>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        const sessionData = { session: { email, password } };

        const { cookies } = this.props;

        this.props.createUserSession(sessionData, cookies);

        this.setState((state) => {
            return {
                email: '',
                password: '',
                errors: null
            }
        })
    };

    handleEmailChange = (event) => {
        const email = event.target.value;

        this.setState((state) => {
            return { email }
        })
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;

        this.setState((state) => {
            return { password }
        });
    };
}

const mapStateToProps = ({ user }, ownProps) => {
    return { user, cookies: ownProps.cookies }
};

export default connect(
    mapStateToProps, {
        createUserSession,
        removeLoginErrors
    })(withRouter(withAuthentication(Login)));
