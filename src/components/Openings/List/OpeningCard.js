import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Card, CardHeader, CardText, Col } from "reactstrap";

import EllipsisText from "react-ellipsis-text";

const OpeningCard = ({ id, attributes }) => {
    return (
        <Col lg="4" className="d-flex align-items-lg-stretch mb-3">
            <Card body>
                <CardHeader className="text-capitalize opening-title">{attributes.title}</CardHeader>
                <CardText className="mt-3">
                    <EllipsisText text={attributes.description} length={120} />
                    </CardText>

                <Link to={`/openings/${id}`} className="link opening-detail-link">Learn More</Link>
            </Card>
        </Col>
    )
};

OpeningCard.propTypes = {
    attributes: PropTypes.object.isRequired
};

export default OpeningCard;
