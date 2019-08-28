import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {
    withCookies
} from 'react-cookie'

import './css/App.css';

import '../Icons';

import withAlertMessage from "../HOCs/withAlertMessage"
import HomePage from '../HomePage';
import Login from '../Login'
import MessageAlertBox from "../AlertBoxes/MessageAlertBox";
import NavigationBar from './../NavigationBar';
import NewOpening from "../Openings/Create"
import OpeningList from "../Openings/List/";
import SignUp from "../SignUp";


class App extends React.Component {
    render() {
        const { cookies, onDismissAlert, alertOptions, showAlertMessage } = this.props;

        return (
            <Router>
                <div className='App'>
                    <NavigationBar cookies={ cookies }/>

                    <header className='App-header'>

                    </header>

                    <div className='container-fluid'>
                        <MessageAlertBox onDismiss={ onDismissAlert } { ...alertOptions }/>

                        <Route path='/' exact component={ HomePage } />

                        <Route path='/sign_in' render={() => <Login cookies={ cookies } />} />

                        <Route path='/sign_up' render={() => <SignUp cookies={ cookies } />} />

                        <Route path="/openings/new" exact render={() => <NewOpening showAlertMessage={ showAlertMessage }/>}/>

                        <Route path="/openings" exact component={OpeningList}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withCookies(withAlertMessage(App));
