import React from "react";

import PropTypes from "prop-types";

import { Card, CardBody, Col, Container, Row } from "reactstrap";

import DeleteOpeningModal from "../Modals/DeleteOpeningModal";
import OpeningActions from "./OpeningActions";


const OpeningDetailCard = ({ data }) => {
    const { attributes, id, relationships } = data;

    const { user } = relationships;

    const [modalOpen, toggleModal] = React.useState(false);

    return (
        <Container className="mt-5 opening-detail">
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <DeleteOpeningModal
                        toggleModal={toggleModal}
                        modalOpen={modalOpen}
                        openingId={id}/>

                    <OpeningActions
                        user={user}
                        id={id}
                        toggleModal={toggleModal}
                        modalOpen={modalOpen}/>

                    <br/>

                    <Card>
                        <CardBody>
                            <h5 className="opening-title">{ attributes.title }</h5>

                            <hr/>

                            <span className="d-flex flex-column opening-detail__meta">
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

                            <hr/>

                            <h4>Description</h4>
                            <p className="text-justify opening-detail__description"> { attributes.description }</p>

                            <hr/>

                            <h4>Qualifications</h4>
                            <p className="text-justify opening-detail__description">{ attributes.qualifications }</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

OpeningDetailCard.propTypes = {
    data: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default OpeningDetailCard;
