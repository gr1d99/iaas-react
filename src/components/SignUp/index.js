import React from 'react';

import { connect } from 'react-redux';

import { withRouter, Redirect } from 'react-router-dom';

import { createUserAccount } from '../../services/users';
import { removeCreateUserAccountErrors } from "./../../redux/actions";

import withAuthentication from "../HOCs/withAuthentication";

import SignUpForm from './SignUpForm';
import AsyncFormErrors from "../Forms/AsyncFormErrors";

import useRedirectWhenAuthenticated from "../../hooks/useRedirectWhenAuthenticated";


const SignUp = (props) => {
    const { cookies, createUserAccount, removeCreateUserAccountErrors } = props;
    const { data } = props.user;

    const authenticated = useRedirectWhenAuthenticated();

    if (authenticated) {
        return <Redirect to="/"/>
    }

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
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
    mapStateToProps, {
        createUserAccount,
        removeCreateUserAccountErrors
    })(withRouter(SignUp));
