import React from "react";

import PropTypes from "prop-types";

import { Card, CardBody, Container } from "reactstrap";


const OpeningDetailCard = ({ data }) => {
    const { attributes } = data;

    return (
        <Container>
            <Card className="mt-5">
                <CardBody>
                    <h3>{ attributes.title }</h3>
                    <hr/>

                    <Card>
                        <CardBody>
                            <p>Open: { attributes.open ? "yes" : "closed" } | Location: { attributes.location } | Company: { attributes.company } | Start Date: { attributes["start-date"] } | End Date: { attributes["end-date"]}</p>
                        </CardBody>
                    </Card>

                    <br/>

                    <h4>Description</h4>
                    <Card>
                        <CardBody>
                            <p className="text-justify"> { attributes.description }</p>
                        </CardBody>
                    </Card>
                    <hr/>

                    <h4>Qualifications</h4>
                    <Card>
                        <CardBody>
                            <p>{ attributes.qualifications }</p>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </Container>
    )
};

OpeningDetailCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default OpeningDetailCard;
