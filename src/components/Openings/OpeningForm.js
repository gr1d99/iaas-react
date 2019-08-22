import React from "react";

import PropTypes from "prop-types";

import {
    Button,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";

import AsyncFormErrors from "../Forms/AsyncFormErrors";

const OpeningForm = (props) => {
    return (
        <Row>
            <Col lg={{ size: 6, offset: 3 }} className="mt-5">
                {
                    props.data ? props.data.errors ? (
                        <AsyncFormErrors color="danger" errors={props.data.errors} clearAsyncErrors={props.clearAsyncErrors}/>
                    ) : (null) : (null)
                }
                <Form onSubmit={props.handleSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="id_title">Title</Label>
                                <Input id="id_title" type="text" name="title" onChange={props.handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="id_company">Company Name</Label>
                                <Input id="id_company" type="text" name="company" onChange={props.handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="id_location">Location</Label>
                                <Input id="id_location" type="text" name="location" onChange={props.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for="id_description">Description</Label>
                        <Input id="id_description" type="textarea" name="description" onChange={props.handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="id_qualifications">Qualifications</Label>
                        <Input id="id_qualifications" type="textarea" name="qualifications" onChange={props.handleInputChange}/>
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="id_start_date">Start Date</Label>
                                <Input id="id_start_date" type="date" name="start_date" onChange={props.handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="id_end_date">End Date</Label>
                                <Input id="id_end_date" type="date" name="end_date" onChange={props.handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button block>Submit</Button>
                </Form>
            </Col>
        </Row>
    )
};

OpeningForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    clearAsyncErrors: PropTypes.func.isRequired,
    data: PropTypes.any
};

export default OpeningForm;
