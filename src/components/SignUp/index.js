import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withRouter } from 'react-router-dom';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import FormErrorsAlertBox from '../AlertBoxes/FormErrorsAlertBox';

import { createUserAccount } from '../../redux/actions';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        confirm_password: '',
        errors: null
    };

    componentDidMount() {
        const { loggedIn } = this.props;

        if (loggedIn) {
            this.props.history.push('/')
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { createUserErrors } = this.props.user;
        const { loggedIn } = this.props;

        if (prevProps.user.createUserErrors !== createUserErrors) {
            this.setState((state) => {
                return {
                    errors: Object.values(createUserErrors)
                }
            })
        }

        if (loggedIn) {
            this.props.history.push('/')
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password, confirm_password } = this.state;

        const errors = {};

        const blankInputError       = 'can\'t be blank';
        const passwordMismatchError = 'Ensure all passwords are equal';

        if(email.length <= 0) {
            errors['email'] = blankInputError;
        }

        if(password.length <= 0) {
            errors['password'] = blankInputError
        }

        if(confirm_password.length <= 0) {
            errors['confirm_password'] = blankInputError;
        }

        if(password.length > 0 && confirm_password.length > 0) {
            if(password !== confirm_password) {
                errors['_passwords'] = passwordMismatchError
            }
        }

        if(Object.keys(errors).length > 0) {
            this.setState((state) => {
                return { errors }
            })
        }

        if(!Object.keys(errors).length > 0) {
            const { email }    = this.state;
            const { password } = this.state;
            const newUserData  = { email, password };
            const { cookies }  = this.props;

            this.props.createUserAccount(newUserData, cookies);
        }
    };

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState((state) => {
            return {
                email,
            };
        })
    };

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState((state) => {
            return {
                password,
            };
        })
    };

    handleConfirmPasswordChange = (event) => {
        const confirm_password = event.target.value;
        this.setState((state) => {
            return {
                confirm_password,
            };
        })
    };

    hasErrors = () => {
        if (!!this.state.errors) {
            return Object.entries(this.state.errors).length > 0;
        }

        return false
    };

    removeErrors = () => {
        this.setState((state) => {
            return {
                errors: {}
            }
        })
    };

    render() {
        return (
            <div className='col-4 offset-4 mt-5'>
                { this.hasErrors() ? <FormErrorsAlertBox errors={this.state.errors}
                                                    hasErrors={this.hasErrors}
                                                    removeErrors={this.removeErrors}/> : '' }
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for='id_email'>Email</Label>
                        <Input type='email'
                               name='email'
                               id='id_email'
                               placeholder='you@example.com'
                               onChange={this.handleEmailChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for='id_password'>Password</Label>
                        <Input type='password'
                               name='password'
                               id='id_password'
                               onChange={this.handlePasswordChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for='id_confirm_password'>Confirm Password</Label>
                        <Input type='password'
                               name='confirm_password'
                               id='id_confirm_password'
                               onChange={this.handleConfirmPasswordChange}/>
                    </FormGroup>
                    <Button>Create Account</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return { user }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createUserAccount
        }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignUp));
