import React from "react";

import PropTypes from "prop-types";

import { Row } from "reactstrap";

import Card from "./OpeningCard";
import OpeningsPagination from "./Pagination/OpeningPagination";

const OpeningItems = ({ data, links, meta, fetchByPage }) => {
    return (
        <div>
            <Row className="mt-5">
                { data.map((opening) => (<Card key={ opening.id } id={ opening.id } attributes={ opening.attributes }/>))}
            </Row>

            <OpeningsPagination links={ links } meta={ meta } fetchByPage={ fetchByPage }/>
        </div>
    )
};

OpeningItems.propTypes = {
    data: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    links: PropTypes.object.isRequired,
    fetchByPage: PropTypes.func.isRequired
};

export default OpeningItems;
