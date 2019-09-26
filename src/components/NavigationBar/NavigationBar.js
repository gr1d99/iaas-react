import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";

import { LOGOUT } from "../../contexts/types";

import { getJwtToken, removeAuthToken, userIsAdmin } from "../../helpers/auth";


const NavigationBar = () => {
    const [{ authenticated }, dispatch] = useAuthContext();

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen)
    };

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

    const authenticatedLinks = () => {
        return (
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <Link className='nav-link' to='/' onClick={logoutUser}><FontAwesomeIcon icon='sign-out-alt'/> Logout</Link>
                </NavItem>
            </Nav>
        );
    };

    const unAuthenticatedLinks = () => {
        return (
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <Link className='nav-link' to='/sign_in'><FontAwesomeIcon icon='sign-in-alt'/> Sign In</Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/sign_up'><FontAwesomeIcon icon='user-plus'/> Sign Up</Link>
                </NavItem>
            </Nav>
        )
    };

    return (
        <div>
            <Navbar color="success" expand='md'>
                <div className="container">
                    <Link className='navbar-brand' to='/'><FontAwesomeIcon icon='home' /> IAPS</Link>
                    <NavbarToggler onClick={toggleNavBar}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link className='nav-link' to="/o"><FontAwesomeIcon icon="briefcase"/> Openings</Link>
                            </NavItem>
                        </Nav>
                        { authenticated ? (authenticatedLinks()) : (unAuthenticatedLinks()) }
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
};

export default NavigationBar;
