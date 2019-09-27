import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { withCookies } from "react-cookie"

import "../Icons";

// App components
import NavigationBar from "./../NavigationBar";

import MessageAlertBox from "../AlertBoxes/MessageAlertBox";

import HomePage from "../HomePage";

import SignIn from "../SignIn";
import SignUp from "../SignUp";

import NewOpening from "../Openings/Create"
import OpeningList from "../Openings/List/";
import OpeningDetail from "../Openings/Detail";
import UpdateOpening from "../Openings/Update";

import AuthContextProvider from "../../contexts/authentication/Provider";
import AdminRoutesAuthContextConsumer from "../../contexts/authentication/consumers/AdminRoutesAuthContextConsumer";
import authContextInitialState from "../../contexts/authentication/initialState";
import authContextReducer from "../../contexts/authentication/reducer";

import NoAuthRouteAuthContextConsumer from "../../contexts/authentication/consumers/NoAuthRouteContextConsumer";


class App extends React.Component {
    render() {
        const { onDismissAlert, alertOptions } = this.props;

        return (
            <AuthContextProvider initialState={ authContextInitialState } reducer={ authContextReducer }>
                <Router>
                    <div className="App">
                        <NavigationBar/>
                        <div className="container-fluid">

                            <MessageAlertBox onDismiss={ onDismissAlert } { ...alertOptions }/>

                            <Route path="/" exact component={ HomePage } />

                            <NoAuthRouteAuthContextConsumer path="/sign_in" component={ SignIn }/>

                            <NoAuthRouteAuthContextConsumer path="/sign_up" component={ SignUp }/>

                            <Route path="/o" exact component={ OpeningList }/>

                            <Route path="/openings/:id" exact render={ (props) => (<OpeningDetail { ...props }/>) }/>

                            <AdminRoutesAuthContextConsumer path="/openings/:id/edit" exact component={ UpdateOpening }/>


                            <AdminRoutesAuthContextConsumer exact path="/o/create" component={ NewOpening }/>
                            </div>
                        <div id="footer" className="mt-5"></div>
                    </div>
                </Router>
            </AuthContextProvider>
        );
    }
}

export default withCookies(App);
