import React from "react";

import { connect } from "react-redux";

import { Container } from "reactstrap";

import EmptyOpeningItems from "./EmptyOpenings";
import OpeningItems from "./OpeningItems";

import { fetchAllOpenings } from "../../../services/openings";


class OpeningList extends React.Component {
    componentDidMount() {
        this.props.fetchAllOpenings()
    }

    render() {
        const { data, meta, links } = this.props.opening;

        if (data) {
            return (
                <Container className="opening-list">
                    {data.length === 0 ? (
                        <EmptyOpeningItems/>
                    ) : (
                        <OpeningItems data={ data } links={ links } meta={ meta } fetchByPage={ this.fetchByPage }/>
                    )}
                </Container>
            )
        } else {
            return <div>Loading..</div>
        }
    }

    fetchByPage = (link) => {
        const paginationQuery = link.split("?").pop();

        this.props.fetchAllOpenings(paginationQuery)
    }
}

const mapStateToProps = ({ opening }) => ({ opening });

export default connect(mapStateToProps, { fetchAllOpenings })(OpeningList);
