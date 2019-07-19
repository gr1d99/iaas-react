import React from 'react';

import PropTypes from 'prop-types';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";


const LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <FormGroup>
                <Label for='id_email'>Email</Label>
                <Input
                    type='email'
                    name='email'
                    id='id_email'
                    placeholder='your-email@example.com'
                    value={props.email}
                    onChange={props.handleEmailChange} />
            </FormGroup>

            <FormGroup>
                <Label for='id_password'>Password</Label>
                <Input
                    type='password'
                    name='password'
                    id='id_password'
                    value={props.password}
                    onChange={props.handlePasswordChange}/>
            </FormGroup>

            <Button type='submit'>Sign In</Button>
        </Form>
    )
};

LoginForm.propTypes = {
    email:                PropTypes.string.isRequired,
    password:             PropTypes.string.isRequired,
    handleSubmit:         PropTypes.func.isRequired,
    handleEmailChange:    PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
};

export default LoginForm;
