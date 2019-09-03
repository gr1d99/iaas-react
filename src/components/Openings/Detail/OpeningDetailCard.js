import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Card, CardBody, Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const OpeningDetailCard = ({ data, history }) => {
    const { attributes } = data;

    return (
        <Container className="mt-5">
            <Link to="#" onClick={history.goBack} className="link">
                <FontAwesomeIcon icon="chevron-left"/> Go back
            </Link>

            <Card>
                <CardBody>
                    <h3 className="opening-title">{ attributes.title }</h3>
                    <hr/>

                    <Card>
                        <CardBody>
                            <span className="d-flex flex-column opening-detail-meta">
                                <span className="">
                                    <strong>Location: </strong>{ attributes.location }
                                </span>
                                <span className="">
                                    <strong>Company: </strong>{ attributes.company }
                                </span>
                                <span className="">
                                    <strong>Start Date: </strong>{ attributes["start-date"] }
                                </span>
                                <span className="">
                                    <strong>End Date: </strong>{ attributes["end-date"]}
                                </span>
                            </span>
                        </CardBody>
                    </Card>

                    <br/>

                    <h4>Description</h4>
                    <Card>
                        <CardBody>
                            <p className="text-justify opening-detail-description"> { attributes.description }</p>
                        </CardBody>
                    </Card>
                    <hr/>

                    <h4>Qualifications</h4>
                    <Card>
                        <CardBody>
                            <p className="text-justify opening-detail-description">{ attributes.qualifications }</p>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </Container>
    )
};

OpeningDetailCard.propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default OpeningDetailCard;
