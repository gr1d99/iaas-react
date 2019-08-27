import React from 'react';

import PropTypes from 'prop-types';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";


const LoginForm = ({ email, password, handleInputChange, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for='id_email'>Email</Label>
                <Input
                    type='email'
                    name='email'
                    id='id_email'
                    placeholder='your-email@example.com'
                    value={email}
                    onChange={handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label for='id_password'>Password</Label>
                <Input
                    type='password'
                    name='password'
                    id='id_password'
                    value={password}
                    onChange={handleInputChange}/>
            </FormGroup>

            <Button type='submit'>Sign In</Button>
        </Form>
    )
};

LoginForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default LoginForm;
