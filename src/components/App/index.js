import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {
    withCookies
} from 'react-cookie'

import jsonwebtoken from "jsonwebtoken";

import './css/App.css';

import '../Icons';

import HomePage from '../HomePage';
import Login from '../Login'
import NavigationBar from './../NavigationBar';
import SignUp from "../SignUp";

import {
    ADMIN_ROLE
} from "../../constants/roles";

const userLoggedIn = (user) => {
    return !!user.jwtToken;
};

const isAdmin = (user) => {
    if (userLoggedIn(user)) {
        return jsonwebtoken.decode(user.jwtToken).role === ADMIN_ROLE;
    }

    return false;
};


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <NavigationBar cookies={this.props.cookies} userLoggedIn={userLoggedIn} />

                    <header className='App-header'></header>

                    <div className='container-fluid'>
                        <Route path='/'
                               exact
                               render={() => <HomePage isAdmin={isAdmin} /> } />

                        <Route path='/sign_in'
                               render={() => <Login userLoggedIn={userLoggedIn}
                                                    cookies={this.props.cookies} />} />

                        <Route path='/sign_up'
                               render={() => <SignUp userLoggedIn={userLoggedIn}
                                                     cookies={this.props.cookies} />} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default withCookies(App);
