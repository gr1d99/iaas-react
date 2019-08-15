import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

import {
    withCookies
} from 'react-cookie'

import {
    clearNotificationAlert,
} from './../../redux/actions';

import {
    destroySession
} from '../../services/sessions';

import './css/App.css';

import HomePage from '../HomePage';
import Login from '../Login'
import MessageAlertBox from '../AlertBoxes/MessageAlertBox';
import NavigationBar from './../NavigationBar';
import SignUp from "../SignUp";

class App extends React.Component {
    logoutUser = () => {
        this.props.destroySession(this.props.cookies);
    };

    loggedIn = () => {
        return !!this.props.user.jwtToken
    };

    onDismiss = () => {
        this.props.dispatch(this.props.clearNotificationAlert())
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <NavigationBar
                        loggedIn={ this.loggedIn() }
                        logoutUser={this.logoutUser}/>

                    <header className='App-header'>
                        <div className='container-fluid mt-2'>
                            <MessageAlertBox
                                alertMessage={this.props.notification.alertMessage}
                                color={this.props.notification.kind}
                                onDismiss={this.onDismiss}/>
                        </div>
                    </header>

                    <div className='container-fluid'>
                        <Route path='/' exact render={ () => (<HomePage loggedIn={this.loggedIn()} />)}/>
                        <Route path='/sign_in' render={ () => (<Login cookies={this.props.cookies} loggedIn={this.loggedIn()} />)}/>
                        <Route path='/sign_up' render={ () => (<SignUp cookies={this.props.cookies} loggedIn={this.loggedIn()} />)}/>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = ({user, notification}, ownProps) => {
    return {
        user,
        notification
    }
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        clearNotificationAlert,
        destroySession,
        dispatch
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withCookies(App));
