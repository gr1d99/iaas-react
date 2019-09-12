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

import AsyncFormErrors from "../../Forms/AsyncFormErrors";
import useOpeningForm from "../hooks/useOpeningForm";

const OpeningForm = (props) => {
    const initialValues = {
        title: "",
        company: "",
        location: "",
        description: "",
        qualifications: "",
        start_date: "",
        end_date: ""
    };

    const { createOpening, clearOpeningErrors } = props;

    const { values, handleInputChange, handleSubmit } = useOpeningForm(initialValues, createOpening);

    return (
        <Row>
            <Col lg={{ size: 6, offset: 3 }} className="mt-5">
                {
                    props.data ? props.data.errors ? (
                        <AsyncFormErrors color="danger" errors={props.data.errors} clearAsyncErrors={clearOpeningErrors}/>
                    ) : (<React.Fragment/>) : (<React.Fragment/>)
                }
                <Form onSubmit={ handleSubmit }>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="id_title">Title</Label>
                                <Input id="id_title" type="text" name="title" value={values.title} onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="id_company">Company Name</Label>
                                <Input id="id_company" type="text" name="company" value={values.company} onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="id_location">Location</Label>
                                <Input id="id_location" type="text" name="location" value={values.location} onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for="id_description">Description</Label>
                        <Input id="id_description" type="textarea" name="description" value={values.description} onChange={handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="id_qualifications">Qualifications</Label>
                        <Input id="id_qualifications" type="textarea" name="qualifications" value={values.qualifications} onChange={handleInputChange}/>
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="id_start_date">Start Date</Label>
                                <Input id="id_start_date" type="date" name="start_date" value={values.start_date} onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="id_end_date">End Date</Label>
                                <Input id="id_end_date" type="date" name="end_date" value={values.end_date} onChange={handleInputChange}/>
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
    createOpening: PropTypes.func.isRequired,
    clearOpeningErrors: PropTypes.func.isRequired,
    data: PropTypes.any
};

export default OpeningForm;
