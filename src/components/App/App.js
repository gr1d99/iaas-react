import React from 'react';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withCookies } from 'react-cookie'

import NavigationBar from './../NavigationBar';
import Login from './../Login'

import { destroySession } from './../../redux/actions';

import './css/App.css';

class App extends React.Component {
    logoutUser = () => {
        this.props.dispatch(this.props.destroySession(this.props.cookies));
    };

    loggedIn = () => {
        return !!this.props.user.jwtToken
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <NavigationBar
                        loggedIn={ this.loggedIn() }
                        logoutUser={this.logoutUser}/>

                    <header className='App-header'>
                    </header>
                    <div className='container-fluid'>
                        <Route path='/sign_in' render={ () => (<Login cookies={this.props.cookies} loggedIn={this.loggedIn()} />)}/>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    destroySession,
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withCookies(App));
