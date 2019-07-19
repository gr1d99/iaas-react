import React from 'react';

import PropTypes from 'prop-types';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";


const SignupForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <FormGroup>
                <Label for='id_email'>Email</Label>
                <Input type='email'
                       name='email'
                       id='id_email'
                       placeholder='you@example.com'
                       value={props.email}
                       onChange={props.handleEmailChange}/>
            </FormGroup>

            <FormGroup>
                <Label for='id_password'>Password</Label>
                <Input type='password'
                       name='password'
                       id='id_password'
                       value={props.password}
                       onChange={props.handlePasswordChange}/>
            </FormGroup>

            <FormGroup>
                <Label for='id_confirm_password'>Confirm Password</Label>
                <Input type='password'
                       name='confirm_password'
                       id='id_confirm_password'
                       value={props.confirm_password}
                       onChange={props.handleConfirmPasswordChange}/>
            </FormGroup>
            <Button>Create Account</Button>
        </Form>
    )
};

SignupForm.propTypes = {
    email:                       PropTypes.string.isRequired,
    password:                    PropTypes.string.isRequired,
    confirm_password:            PropTypes.string.isRequired,
    handleSubmit:                PropTypes.func.isRequired,
    handleEmailChange:           PropTypes.func.isRequired,
    handlePasswordChange:        PropTypes.func.isRequired,
    handleConfirmPasswordChange: PropTypes.func.isRequired,
};

export default SignupForm;
