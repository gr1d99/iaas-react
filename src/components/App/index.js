import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { withCookies } from 'react-cookie'

import './css/App.css';

import '../Icons';

import HomePage from '../HomePage';
import SignIn from '../SignIn'
import MessageAlertBox from "../AlertBoxes/MessageAlertBox";
import NavigationBar from './../NavigationBar';
import NewOpening from "../Openings/Create"
import OpeningList from "../Openings/List/";
import SignUp from "../SignUp";

import AuthContextProvider from "../../contexts/authentication/Provider";
import AdminRoutesAuthContextConsumer from "../../contexts/authentication/consumers/AdminRoutesAuthContextConsumer";
import authContextInitialState from "../../contexts/authentication/initialState";
import authContextReducer from "../../contexts/authentication/reducer";

import NoAuthRouteAuthContextConsumer from "../../contexts/authentication/consumers/NoAuthRouteContextConsumer";

class App extends React.Component {
    render() {
        const { cookies, onDismissAlert, alertOptions } = this.props;

        return (
            <AuthContextProvider initialState={ authContextInitialState } reducer={ authContextReducer }>
                <Router>
                    <div className='App'>
                        <NavigationBar cookies={ cookies }/>

                        <header className='App-header'></header>

                        <div className='container-fluid'>
                            <MessageAlertBox onDismiss={ onDismissAlert } { ...alertOptions }/>

                            <Route path='/' exact component={ HomePage } />

                            <NoAuthRouteAuthContextConsumer component={ SignIn } path="/sign_in"/>

                            <NoAuthRouteAuthContextConsumer component={ SignUp } path="/sign_up"/>

                            <AdminRoutesAuthContextConsumer component={ NewOpening } path="/openings/new"/>

                            <Route path="/openings" exact component={ OpeningList }/>
                        </div>
                    </div>
                </Router>
            </AuthContextProvider>
        );
    }
}

export default withCookies(App);
