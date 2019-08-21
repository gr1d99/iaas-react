import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { blankInputError } from '../../constants/validationMessages';

import { STATUSES } from "../../redux/actionTypes";

import { createUserSession } from '../../services/sessions';

import withAuthentication from "../HOCs/withAuthentication";
import FormErrorsAlertBox from "../AlertBoxes/FormErrorsAlertBox";
import LoginForm from './LoginForm';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        errors: null
    };

    componentDidMount() {
        return this.props.authenticated ? this.props.history.push("/") : null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { status } = this.props.user;

        if (status === STATUSES.failure ) {
            const { errors } = this.props.user.data;

            if (errors !== prevProps.user.data.errors) {
                this.setState((state) => {
                    return {
                        errors: { '_auth': this.props.user.data.errors }
                    }
                })
            }
        }

        if (status === STATUSES.success) {
            return this.props.authenticated ? this.props.history.push("/") : null
        }
    }

    render() {
        return (
            <div className="col-md-4 offset-4 mt-5">
                { this.hasErrors() ? (
                    <FormErrorsAlertBox
                        errors={this.state.errors}
                        hasErrors={this.hasErrors}
                        removeErrors={this.removeErrors}/>
                ): (
                    ''
                )}
                <LoginForm
                    email={this.state.email}
                    password={this.state.password}
                    handleSubmit={this.handleSubmit}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}/>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const errors              = {};

        if(email.length <= 0) {
            errors['email'] = blankInputError;
        }

        if(password.length <= 0) {
            errors['password'] = blankInputError
        }

        if(Object.keys(errors).length > 0) {
            this.setState((state) => {
                return { errors }
            })
        }

        if(!Object.keys(errors).length > 0) {
            const sessionData = { session: { email, password } };

            this.props.dispatch(
                this.props.createUserSession(
                    sessionData,
                    this.props.cookies
                )
            );
            this.setState((state) => {
                return {
                    email: '',
                    password: '',
                    errors: null
                }
            })
        }
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

    hasErrors = () => {
        if (!!this.state.errors) {
            return Object.entries(this.state.errors).length > 0;
        }

        return false
    };

    removeErrors = () => {
        this.setState((state) => {
            return { errors: {} }
        })
    };
}

const mapStateToProps = ({ user }, ownProps) => {
    return { user, cookies: ownProps.cookies }
};

const mapDispatchToProps = (dispatch) => ({ createUserSession, dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withAuthentication(Login)));
