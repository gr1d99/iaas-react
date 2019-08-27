import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { createUserAccount } from '../../services/users';
import { removeCreateUserAccountErrors } from "./../../redux/actions";

import withAuthentication from "../HOCs/withAuthentication";

import SignUpForm from './SignUpForm';
import AsyncFormErrors from "../Forms/AsyncFormErrors";


class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        confirm_password: '',
    };

    componentDidMount() {
        const { authenticated, history } = this.props;

        if (authenticated) {
            history.push("/")
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { authenticated, history } = this.props;

        if (authenticated) {
            history.push("/")
        }
    }

    render() {
        const { data } = this.props.user;
        const { removeCreateUserAccountErrors } = this.props;

        return (
            <div className='col-4 offset-4 mt-5'>

                { data && data.errors ? <AsyncFormErrors color="danger" clearAsyncErrors={ removeCreateUserAccountErrors } errors={ data.errors }/> : "" }

                <SignUpForm email={this.state.email} password={this.state.password} confirm_password={this.state.confirm_password} handleSubmit={this.handleSubmit} handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} handleConfirmPasswordChange={this.handleConfirmPasswordChange}/>

            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        const { cookies } = this.props;

        this.props.createUserAccount({ email, password }, cookies);
    };

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState((state) => {
            return {
                email,
            };
        })
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState((state) => {
            return {
                password,
            };
        })
    };

    handleConfirmPasswordChange = (event) => {
        const confirm_password = event.target.value;
        this.setState((state) => {
            return {
                confirm_password,
            };
        })
    };
}

const mapStateToProps = ({ user }) => {
    return { user }
};

export default connect(
    mapStateToProps, {
        createUserAccount,
        removeCreateUserAccountErrors
    })(withRouter(withAuthentication(SignUp)));
