import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';

import { Link } from "react-router-dom";


export default class NavigationBar extends React.Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    logoutUser = () => {
        this.props.destroySession(this.props.cookies)
    };

    authenticatedLinks() {
        return (
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <Link className='nav-link' to='/' onClick={this.logoutUser}>Logout</Link>
                </NavItem>
            </Nav>
        );
    };

    unAuthenticatedLinks() {
        return (
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <Link className='nav-link' to='/sign_in'>Sign In</Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/sign_up'>Sign Up</Link>
                </NavItem>
            </Nav>
        )
    };

    render() {
        return (
            <div>
                <Navbar color='light' light expand='md'>
                    <Link className='navbar-brand' to='/'>IAPS</Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {
                            this.props.userLoggedIn ? (
                                this.authenticatedLinks()
                            ) : (
                                this.unAuthenticatedLinks()
                            )
                        }
                    </Collapse>
                </Navbar>
            </div>
        )
    }
};
