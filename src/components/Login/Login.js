import React from 'react';

import { connect } from 'react-redux';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { withRouter } from 'react-router-dom';

import { createUserSession } from './../../redux/actions';
import { STATUSES} from "../../redux/actionTypes";

export const parentErrorDivNodeId = 'id_form_errors';
export const ulNodeId = 'id_ul_form_errors';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    };

    componentDidMount() {
        const { loggedIn } = this.props;
        if (loggedIn) {
            this.props.history.push('/')
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { status } = this.props.user;

        if (status === STATUSES.failure ) {
            const { errors } = this.props.user.data;

            if (errors !== prevProps.user.data.errors) {
                this.buildErrorNodes();
                this.appendErrors(errors)
            }
        }

        if (status === STATUSES.success) {
            const { loggedIn } = this.props;
            if (loggedIn) {
                this.props.history.push("/")
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        if (this.state.email.length > 0 && this.state.password.length > 0) {
            const sessionData = { session: { email, password } };
            this.props.dispatch(
                this.props.createUserSession(
                    sessionData,
                    this.props.cookies
                )
            );
            this.clearValidationErrors();
        }

        this.handleValidation(email, password)
    };

    handleValidation = (email, password) => {
        const validationErrors = {};

        if (email.length <= 0) {
            validationErrors['email'] = 'Email required';
        }

        if (password.length <= 0) {
            validationErrors['password'] = 'Password required';
        }

        if (Object.keys(validationErrors).length > 0) {
            this.clearValidationErrors();
            this.buildErrorNodes();

            const errorMessages = Object.values(validationErrors);

            this.appendErrors(errorMessages)

        }
    };

    buildErrorNodes = () => {
        const ulNode = document.createElement('ul');
        ulNode.id = ulNodeId;

        document.getElementById(parentErrorDivNodeId).appendChild(ulNode);
    };

    appendErrors = (errors) => {
        errors.forEach((message) => {
            const liNode = document.createElement('li');
            const messageNode = document.createTextNode(message);
            liNode.appendChild(messageNode);
            document.getElementById(ulNodeId).appendChild(liNode);
        });
    };

    clearValidationErrors = () => {
        const parentErrorDivNode = document.getElementById(parentErrorDivNodeId);
        const ulErrorNode = document.getElementById(ulNodeId);

        if (ulErrorNode) {
            parentErrorDivNode.removeChild(ulErrorNode);
        }
    };

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState((state) => {
            return { email: email }
        })
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState((state) => {
            return { password: password }
        });
    };

    render() {
        return (
            <div className="col-md-4 offset-4 mt-5">
                <div id='id_form_errors' className='text-danger'></div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='id_email'>Email</Label>
                        <Input type='email'
                               name='email'
                               id='id_email'
                               placeholder='your-email@example.com'
                               value={this.state.email}
                               onChange={this.handleEmailChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='id_password'>Password</Label>
                        <Input type='password'
                               name='password'
                               id='id_password'
                               onChange={this.handlePasswordChange}/>
                    </FormGroup>
                    <Button type='submit'>Sign In</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    user:    state.user,
    cookies: ownProps.cookies
});

const mapDispatchToProps = (dispatch) => ({
    createUserSession,
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));
