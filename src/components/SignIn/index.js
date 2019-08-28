import React  from 'react';

import { withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { createUserSession } from '../../services/sessions';

import { removeLoginErrors } from '../../redux/actions';

import SignInForm from './SignInForm';
import SignInErrors from "./SignInErrors";

import useAuthentication from "../../hooks/useAuthentication";


const Login = (props) => {
    const { cookies, createUserSession, removeLoginErrors } = props;
    const { data } = props.user;

    const authenticated = useAuthentication();

    if (authenticated) {
        return <Redirect to="/"/>
    }

    return (
        <div className="col-md-4 offset-4 mt-5">
            { data && data.errors ? (
                <SignInErrors errors={ data.errors } removeLoginErrors={ removeLoginErrors }/>
            ) : (
                <React.Fragment/>
            ) }

            <SignInForm authenticateUser={ createUserSession } cookies={ cookies }/>
        </div>
    )
};

const mapStateToProps = ({ user }, ownProps) => {
    return { user, cookies: ownProps.cookies }
};

export default connect(
    mapStateToProps, {
        createUserSession,
        removeLoginErrors
    })(withRouter(Login));
