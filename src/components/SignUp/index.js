import React from 'react';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { createUserAccount } from '../../services/users';
import { removeCreateUserAccountErrors } from "./../../redux/actions";

import withAuthentication from "../HOCs/withAuthentication";

import SignUpForm from './SignUpForm';
import AsyncFormErrors from "../Forms/AsyncFormErrors";


class SignUp extends React.Component {
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
        const { cookies, createUserAccount, removeCreateUserAccountErrors } = this.props;
        const { data } = this.props.user;

        return (
            <div className='col-4 offset-4 mt-5'>
                { data && data.errors ? (
                    <AsyncFormErrors color="danger" clearAsyncErrors={ removeCreateUserAccountErrors } errors={ data.errors }/>
                ) : (
                    <React.Fragment/>
                ) }

                <SignUpForm cookies={ cookies } createUserAccount={ createUserAccount }/>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(
    mapStateToProps, {
        createUserAccount,
        removeCreateUserAccountErrors
    })(withRouter(withAuthentication(SignUp)));
