import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";

import { getJwtToken, removeAuthToken, userIsAdmin } from "../../helpers/auth";

import { LOGOUT } from "../../contexts/types";

export default () => {

    const [, dispatch] = useAuthContext();

    const logoutUser = () => {
        removeAuthToken();

        const authenticated = !!getJwtToken();

        dispatch({
            type: LOGOUT,
            payload: {
                authenticated,
                roles: {
                    admin: userIsAdmin()
                }
            }
        })
    };

    return (<Link className='nav-link' to='/' onClick={logoutUser}><FontAwesomeIcon icon='sign-out-alt'/> Logout</Link>)
}
