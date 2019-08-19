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

import withAlertMessage from "../HOCs/withAlertMessage"
import HomePage from '../HomePage';
import Login from '../Login'
import MessageAlertBox from "../AlertBoxes/MessageAlertBox";
import NavigationBar from './../NavigationBar';
import NewOpening from "../Openings"
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

                    <header className='App-header'>

                    </header>

                    <div className='container-fluid'>
                        <MessageAlertBox onDismiss={this.props.onDismissAlert} {...this.props.alertOptions}/>

                        <Route path='/'
                               exact
                               render={() => <HomePage isAdmin={isAdmin} /> } />

                        <Route path='/sign_in'
                               render={() => <Login userLoggedIn={userLoggedIn}
                                                    cookies={this.props.cookies} />} />

                        <Route path='/sign_up'
                               render={() => <SignUp userLoggedIn={userLoggedIn}
                                                     cookies={this.props.cookies} />} />

                        <Route path="/openings/new"
                               render={() => <NewOpening userLoggedIn={userLoggedIn}
                                                         isAdmin={isAdmin}
                                                         showAlertMessage={this.props.showAlertMessage}/>}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withCookies(withAlertMessage(App));
