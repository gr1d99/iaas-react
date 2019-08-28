import React  from 'react';

import { withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { createUserSession } from '../../services/sessions';

import { removeLoginErrors } from '../../redux/actions';

import withAuthentication from "../HOCs/withAuthentication";

import LoginForm from './LoginForm';
import LoginErrors from "./LoginErrors";

import useRedirectWhenAuthenticated from "../../hooks/useRedirectWhenAuthenticated";


const Login = (props) => {
    const { cookies, createUserSession, removeLoginErrors } = props;
    const { data } = props.user;

    const authenticated = useRedirectWhenAuthenticated();

    if (authenticated) {
        return <Redirect to="/"/>
    }

    return (
        <div className="col-md-4 offset-4 mt-5">
            { data && data.errors ? (
                <LoginErrors errors={ data.errors } removeLoginErrors={ removeLoginErrors }/>
            ) : (
                <React.Fragment/>
            ) }

            <LoginForm authenticateUser={ createUserSession } cookies={ cookies }/>
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
