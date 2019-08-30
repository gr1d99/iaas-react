import React  from 'react';

import { connect } from 'react-redux';

import { createUserSession } from '../../services/sessions';

import { resetUser } from '../../redux/actions';

import SignInForm from './SignInForm';
import AsyncFormErrors from "../Forms/AsyncFormErrors";

import useAuthentication from "../../hooks/useAuthentication";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";

import { getJwtToken, userIsAdmin } from "../../helpers/auth";

import { LOGIN } from "../../contexts/types";


const Login = (props) => {
    const { createUserSession, resetUser } = props;

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
                <AsyncFormErrors color="danger" clearAsyncErrors={ resetUser } errors={ data.errors }/>
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
        resetUser
    })(Login);
