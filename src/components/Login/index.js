import React  from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { createUserSession } from '../../services/sessions';

import { removeLoginErrors } from '../../redux/actions';

import withAuthentication from "../HOCs/withAuthentication";

import LoginForm from './LoginForm';
import LoginErrors from "./LoginErrors";


class Login extends React.Component {
    componentDidMount() {
        const { authenticated, history } = this.props;

        if (authenticated) { history.push("/") }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { authenticated, history } = this.props;

        if (authenticated) { history.push("/") }
    }

    render() {
        const { removeLoginErrors, cookies } = this.props;
        const { data } = this.props.user;

        return (
            <div className="col-md-4 offset-4 mt-5">
                { data && data.errors ? (
                    <LoginErrors errors={ data.errors } removeLoginErrors={ removeLoginErrors }/>
                ) : (
                    <React.Fragment/>
                ) }

                <LoginForm authenticateUser={ this.props.createUserSession } cookies={ cookies }/>
            </div>
        )
    }
}

const mapStateToProps = ({ user }, ownProps) => {
    return { user, cookies: ownProps.cookies }
};

export default connect(
    mapStateToProps, {
        createUserSession,
        removeLoginErrors
    })(withRouter(withAuthentication(Login)));
