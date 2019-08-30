import React from "react";

import PropTypes from "prop-types";

import { Button, Card, CardHeader, CardText, Col } from "reactstrap";

import EllipsisText from "react-ellipsis-text";

const OpeningCard = ({ attributes }) => {
    return (
        <Col lg="4" className="d-flex align-items-lg-stretch mb-3">
            <Card body>
                <CardHeader className="text-capitalize opening-title">{attributes.title}</CardHeader>
                <CardText className="mt-3">
                    <EllipsisText text={attributes.description} length={120} />
                    </CardText>

                <Button>Apply</Button>
            </Card>
        </Col>
    )
};

OpeningCard.propTypes = {
    attributes: PropTypes.object.isRequired
};

export default OpeningCard;
