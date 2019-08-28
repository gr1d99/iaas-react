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

import useRedirectWhenAuthenticated from "../../hooks/useRedirectWhenAuthenticated";

const NavigationBar = (props) => {
    const { cookies } = props;
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavBar = () => {
        setIsOpen(!!isOpen)
    };

    const logoutUser = () => {
        props.destroySession(cookies)
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

    const authenticated = useRedirectWhenAuthenticated();

    return (
        <div>
            <Navbar color='light' light expand='md'>
                <Link className='navbar-brand' to='/'><FontAwesomeIcon icon='home' /> IAPS</Link>
                <NavbarToggler onClick={toggleNavBar}/>
                <Collapse isOpen={isOpen} navbar>
                    { authenticated ? (authenticatedLinks()) : (unAuthenticatedLinks()) }
                </Collapse>
            </Navbar>
        </div>
    )
};

export default NavigationBar;
