import React from "react";

import { connect } from "react-redux";

import OpeningItems from "./OpeningItems";

import { fetchAllOpenings } from "../../../services/openings";

import "./css/list.css"

class OpeningList extends React.Component {
    componentDidMount() {
        this.props.fetchAllOpenings()
    }

    render() {
        const { data, meta, links } = this.props.opening;

        if (data) {
            return <div className="container">
                <OpeningItems data={ data } links={ links } meta={ meta } fetchByPage={ this.fetchByPage }/>
            </div>
        } else {
            return <div>Loading..</div>
        }
    }

    fetchByPage = (link) => {
        const paginationQuery = link.split("?").pop();

        this.props.fetchAllOpenings(paginationQuery)
    }
}

const mapStateToProps = ({ opening }) => {
    return { opening }
};

export default connect(mapStateToProps, { fetchAllOpenings })(OpeningList);
