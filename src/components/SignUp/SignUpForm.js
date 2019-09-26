import React from 'react';

import PropTypes from 'prop-types';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

import useAuthForm from "../../hooks/useAuthForm";


const SignUpForm = (props) => {
    const { createUserAccount } = props;
    const defaultValues = { email: "", password: "", confirm_password: "" };
    const { values, handleInputChange, handleSubmit } = useAuthForm(defaultValues, createUserAccount);
    const { email, password, confirm_password } = values;

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for='id_email'>Email</Label>
                <Input type='email'
                       name='email'
                       id='id_email'
                       placeholder='you@example.com'
                       value={email}
                       onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
                <Label for='id_password'>Password</Label>
                <Input type='password'
                       name='password'
                       id='id_password'
                       value={password}
                       onChange={handleInputChange}/>
            </FormGroup>

            <FormGroup>
                <Label for='id_confirm_password'>Confirm Password</Label>
                <Input type='password'
                       name='confirm_password'
                       id='id_confirm_password'
                       value={confirm_password}
                       onChange={handleInputChange}/>
            </FormGroup>

            <Button className="btn btn-success">Create Account</Button>
        </Form>
    )
};

SignUpForm.propTypes = {
    createUserAccount: PropTypes.func.isRequired
};

export default SignUpForm;
