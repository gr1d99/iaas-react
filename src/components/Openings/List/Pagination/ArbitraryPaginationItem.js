import React from "react";

import PropTypes from "prop-types";

import { PaginationItem, PaginationLink } from "reactstrap";


const ArbitraryPaginationItem = ({ counter, links, meta, fetchByPage }) => {
    const nextArbitraryPage = meta["current-page"] + counter;
    const willCreate = nextArbitraryPage < meta["total-pages"];

    if (willCreate) {
        const pageSize = links.next.split("=").pop();

        const query = `page[number]=${nextArbitraryPage}&page[size]=${pageSize}`;

        return (
            <PaginationItem href="#" onClick={() => fetchByPage(query) }>
                <PaginationLink>
                    { nextArbitraryPage }
                </PaginationLink>
            </PaginationItem>
        )
    } else {
        return ""
    }
};

ArbitraryPaginationItem.propTypes = {
    counter: PropTypes.number.isRequired,
    links: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    fetchByPage: PropTypes.func.isRequired
};

export default ArbitraryPaginationItem;
