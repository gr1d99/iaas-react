import React from 'react';
import {
    Alert,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import FormErrorsAlertBox from '../AlertBoxes/FormErrorsAlertBox';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        confirm_password: '',
        errors: {}
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { email, password, confirm_password } = this.state;

        const errors = {};

        const blankInputError = 'can\'t be blank';

        if(email.length <= 0) {
            errors['email'] = blankInputError;
        }

        if(password.length <= 0) {
            errors['password'] = blankInputError
        }

        if(confirm_password.length <= 0) {
            errors['confirm_password'] = blankInputError;
        }

        if(Object.keys(errors).length > 0) {
            this.setState((state) => {
                return { errors }
            })
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
        return Object.entries(this.state.errors).length > 0;
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

export default SignUp;
