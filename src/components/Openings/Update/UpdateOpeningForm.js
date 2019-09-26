import React from "react";

import PropTypes from "prop-types";

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
} from "reactstrap";

import useOpeningForm from "../hooks/useOpeningForm";
import AsyncFormErrors from "../../Forms/AsyncFormErrors";

const EditOpeningForm = ({ data, errors, updateOpeningDetail, removeOpeningErrors }) => {
    let initialValues = data.attributes;

    const { values, handleSubmit, handleInputChange } = useOpeningForm(initialValues, updateOpeningDetail);

    return (
        <Row>
            <Col lg={{ size: 6, offset: 3 }} className="mt-5">
                <Card>
                    <CardTitle className="text-center mt-3">
                        <h4>Edit Opening</h4>
                        <hr className="ml-3 mr-3"/>
                    </CardTitle>

                    { errors ? (
                        <div className="m-3">
                            <AsyncFormErrors
                                color="danger"
                                clearAsyncErrors={removeOpeningErrors}
                                errors={errors}/>
                        </div>
                    ) : (<React.Fragment/>) }

                    <CardBody className="mt-3">
                        <Form onSubmit={handleSubmit}>
                            <Row form>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="id_title">Title</Label>
                                        <Input
                                            id="id_title"
                                            type="text"
                                            name="title"
                                            value={values.title}
                                            onChange={handleInputChange}/>
                                    </FormGroup>
                                </Col>

                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="id_company">Company Name</Label>
                                        <Input
                                            id="id_company"
                                            type="text"
                                            name="company"
                                            value={values.company}
                                            onChange={handleInputChange}/>
                                    </FormGroup>
                                </Col>

                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="id_location">Location</Label>
                                        <Input
                                            id="id_location"
                                            type="text"
                                            name="location"
                                            value={values.location}
                                            onChange={handleInputChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label for="id_description">Description</Label>
                                <Input
                                    id="id_description"
                                    type="textarea"
                                    name="description"
                                    value={values.description}
                                    onChange={handleInputChange}/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="id_qualifications">Qualifications</Label>
                                <Input
                                    id="id_qualifications"
                                    type="textarea"
                                    name="qualifications"
                                    value={values.qualifications}
                                    onChange={handleInputChange}/>
                            </FormGroup>

                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="id_start_date">Start Date</Label>
                                        <Input
                                            id="id_start_date"
                                            type="date"
                                            name="start_date"
                                            value={values["start-date"]}
                                            onChange={handleInputChange}/>
                                    </FormGroup>
                                </Col>

                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="id_end_date">End Date</Label>
                                        <Input
                                            id="id_end_date"
                                            type="date"
                                            name="end_date"
                                            value={values["end-date"]}
                                            onChange={handleInputChange}/>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Button block className="mt-5 mb-3 btn btn-success">Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
};

EditOpeningForm.propTypes = {
    data: PropTypes.object.isRequired,
    errors: PropTypes.any,
    updateOpeningDetail: PropTypes.func.isRequired,
    removeOpeningErrors: PropTypes.func.isRequired
};

export default EditOpeningForm;
