import React from 'react';

import { connect } from 'react-redux';


import { createUserAccount } from '../../services/users';
import { removeCreateUserAccountErrors } from "./../../redux/actions";

import SignUpForm from './SignUpForm';
import AsyncFormErrors from "../Forms/AsyncFormErrors";

import useAuthentication from "../../hooks/useAuthentication";

import { getJwtToken, userIsAdmin } from "../../helpers/auth";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";

import { LOGIN } from "../../contexts/types";


const SignUp = (props) => {
    const { createUserAccount, removeCreateUserAccountErrors } = props;
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
        <div className='col-4 offset-4 mt-5'>
            { data && data.errors ? (
                <AsyncFormErrors color="danger" clearAsyncErrors={ removeCreateUserAccountErrors } errors={ data.errors }/>
            ) : (
                <React.Fragment/>
            ) }

            <SignUpForm createUserAccount={ createUserAccount }/>
        </div>
    )
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
    mapStateToProps, {
        createUserAccount,
        removeCreateUserAccountErrors
    })(SignUp);
