import React from 'react';

import PropTypes from "prop-types";

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

import useAuthForm from "./../../hooks/useAuthForm";

const LoginForm = ({ authenticateUser, cookies }) => {
    const defaultValues = { email: "", password: "" };
    const { values, handleSubmit, handleInputChange } = useAuthForm(defaultValues, cookies, authenticateUser);
    const { email, password } = values;

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for='id_email'>Email</Label>
                <Input type='email' name='email' id='id_email' placeholder='your-email@example.com' value={email} onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label for='id_password'>Password</Label>
                <Input type='password' name='password' id='id_password' value={password} onChange={handleInputChange}/>
            </FormGroup>

            <Button type='submit'>Sign In</Button>
        </Form>
    )
};

LoginForm.propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    cookies: PropTypes.object.isRequired,
};

export default LoginForm;
