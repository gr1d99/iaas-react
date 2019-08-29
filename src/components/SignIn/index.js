import React  from 'react';

import { connect } from 'react-redux';

import { createUserSession } from '../../services/sessions';

import { removeLoginErrors } from '../../redux/actions';

import SignInForm from './SignInForm';
import SignInErrors from "./SignInErrors";

import useAuthentication from "../../hooks/useAuthentication";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";

import { getJwtToken, userIsAdmin } from "../../helpers/auth";

import { LOGIN } from "../../contexts/types";


const Login = (props) => {
    const { createUserSession, removeLoginErrors } = props;
    const { data } = props.user;

    const authenticated = useAuthentication();
    const [, dispatch] = useAuthContext();

    if (authenticated) {
        dispatch({
            type: LOGIN,
            payload: {
                authenticated: !!getJwtToken(),
                roles: {
                    admin: userIsAdmin()
                }
            }
        });
    }

    return (
        <div className="col-md-4 offset-4 mt-5">
            { data && data.errors ? (
                <SignInErrors errors={ data.errors } removeLoginErrors={ removeLoginErrors }/>
            ) : (
                <React.Fragment/>
            ) }

            <SignInForm authenticateUser={ createUserSession }/>
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
    })(Login);

