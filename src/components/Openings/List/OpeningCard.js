import React from "react";

import PropTypes from "prop-types";

import { Button, Card, CardText, CardTitle, Col } from "reactstrap";

const OpeningCard = ({ attributes }) => {
    return (
        <Col lg="3" className="mb-3">
            <Card body>
                <CardTitle>{attributes.title}</CardTitle>
                <CardText>{attributes.description}</CardText>
                <Button>Apply</Button>
            </Card>
        </Col>
    )
};

OpeningCard.propTypes = {
    attributes: PropTypes.object.isRequired
};

export default OpeningCard;
