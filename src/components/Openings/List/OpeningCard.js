import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Card, CardHeader, CardText, Col } from "reactstrap";

import EllipsisText from "react-ellipsis-text";

import routes from "../../../helpers/routePaths";

const OpeningCard = ({ id, attributes }) => {
    return (
        <Col lg="4" className="d-flex align-items-lg-stretch mb-3">
            <Card body>
                <CardHeader className="text-capitalize opening-list__title">{attributes.title}</CardHeader>
                <CardText className="mt-3 opening-description">
                    <EllipsisText text={attributes.description} length={120} />
                    </CardText>

                <Link to={routes.openings.detail(id)} className="btn btn-sm btn-success link opening-list__learn_more">Learn More</Link>
            </Card>
        </Col>
    )
};

OpeningCard.propTypes = {
    attributes: PropTypes.object.isRequired
};

export default OpeningCard;
