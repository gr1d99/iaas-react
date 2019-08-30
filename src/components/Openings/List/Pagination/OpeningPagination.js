import React from "react";

import PropTypes from "prop-types";

import {Pagination, PaginationItem, PaginationLink, Row} from "reactstrap";

import ArbitraryPaginationItem from "./ArbitraryPaginationItem";


class OpeningPagination extends React.Component {
    render() {
        const { links, meta, fetchByPage } = this.props;

        if (!meta["next-page"] && !meta["prev-page"]) {
            return <React.Fragment/>
        }

        return (
            <Row className="d-flex justify-content-center">
                <Pagination aria-label="Openings List navigation">

                    <PaginationItem disabled={ meta["current-page"] === 1 }>
                        <PaginationLink first href="#" onClick={() => this.props.fetchByPage(links.first) }/>
                    </PaginationItem>
                    <PaginationItem disabled={ !meta["prev-page"] }>
                        <PaginationLink previous href="#" onClick={() => this.props.fetchByPage(links.prev) } />
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#" onClick={() => this.props.fetchByPage(links.self) }>
                            { meta["current-page"] }
                        </PaginationLink>
                    </PaginationItem>

                    <ArbitraryPaginationItem counter={ 1 } meta={ meta } links={ links } fetchByPage={ fetchByPage }/>
                    <ArbitraryPaginationItem counter={ 2 } meta={ meta } links={ links } fetchByPage={ fetchByPage }/>

                    <PaginationItem disabled={ meta["current-page"] === meta["total-pages"] }>
                        <PaginationLink next href="#" onClick={() => this.props.fetchByPage(links.next) }/>
                    </PaginationItem>
                    <PaginationItem disabled={ meta["current-page"] === meta["total-pages"] }>
                        <PaginationLink last href="#" onClick={() => this.props.fetchByPage(links.last) } />
                    </PaginationItem>
                </Pagination>
            </Row>
        )
    }
}

OpeningPagination.propTypes = {
    meta: PropTypes.object.isRequired,
    links: PropTypes.object.isRequired,
    fetchByPage: PropTypes.func.isRequired,
};

export default OpeningPagination;
