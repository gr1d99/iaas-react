import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from "react-router-dom";


export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    authenticatedLinks() {
        return (
            <Nav className='ml-auto' navbar>
                <NavItem>
                    <a className='nav-link' href='#' onClick={this.props.logoutUser}>Logout</a>
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
                    <NavbarBrand href='/'>IAPS</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {
                            this.props.loggedIn ? (
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
