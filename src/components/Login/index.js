import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { createUserSession } from '../../services/sessions';

import { removeLoginErrors } from '../../redux/actions';

import withAuthentication from "../HOCs/withAuthentication";

import LoginForm from './LoginForm';
import LoginErrors from "./LoginErrors";

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    componentDidMount() {
        const { authenticated, history } = this.props;

        if (authenticated) { history.push("/") }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { authenticated, history } = this.props;

        if (authenticated) { history.push("/") }
    }

    render() {
        const { handleSubmit, handleInputChange } = this;
        const { email, password } = this.state;
        const { removeLoginErrors } = this.props;
        const { data } = this.props.user;

        return (
            <div className="col-md-4 offset-4 mt-5">
                { data && data.errors ? (
                    <LoginErrors errors={ data.errors } removeLoginErrors={ removeLoginErrors }/>
                ) : (
                    <React.Fragment/>
                ) }

                <LoginForm email={ email } password={ password } handleSubmit={ handleSubmit } handleInputChange={ handleInputChange } />
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        const sessionData = { session: { email, password } };

        const { cookies } = this.props;

        this.props.createUserSession(sessionData, cookies);

        this.setState({
            email: '',
            password: ''
        })
    };

    handleInputChange = (event) => {
        const inputData = {};

        inputData[event.target.name] = event.target.value;

        this.setState(inputData)
    };
}

const mapStateToProps = ({ user }, ownProps) => {
    return { user, cookies: ownProps.cookies }
};

export default connect(
    mapStateToProps, {
        createUserSession,
        removeLoginErrors
    })(withRouter(withAuthentication(Login)));
