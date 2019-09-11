import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Card, CardBody, Container } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const OpeningDetailCard = ({ data, history }) => {
    const { attributes, id } = data;

    return (
        <Container className="mt-5">
            <div className="clearfix">
                <Link to="#" onClick={history.goBack} className="link float-left">
                    <FontAwesomeIcon icon="chevron-left"/> Go back
                </Link>

                <Link to={`/openings/${id}/edit`} className="link float-right">
                    <FontAwesomeIcon icon="pencil-alt"/> Edit
                </Link>
            </div>

            <br/>

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