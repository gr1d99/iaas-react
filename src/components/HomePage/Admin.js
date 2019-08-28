import React from "react";

import {
    Col,
    Row
} from "reactstrap";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/admin.css"


const Admin = () => {
    return (
        <Row>
            <Col xs="6">
                <h5 className="text-center">Openings</h5>

                <hr/>

                <div className="d-flex flex-row">
                    <Link to="/openings/new" className="p-1 link">
                        <FontAwesomeIcon icon="plus"/> Create
                    </Link>
                    <div className="pr-1 pl-1 pt-1 link">|</div>
                    <Link to="/openings" className="p-1 link">
                        <FontAwesomeIcon icon="eye"/> View All
                    </Link>
                </div>
            </Col>

            <Col xs="6" className="text-center">
                <h5>Applications</h5>

                <hr/>

                <div className="d-flex flex-row">
                    <Link to="#" className="p-1 link">
                        <FontAwesomeIcon icon="plus"/> Create
                    </Link>
                    <div className="pr-1 pl-1 pt-1 link">|</div>
                    <Link to="#" className="p-1 link">
                        <FontAwesomeIcon icon="eye"/> View All
                    </Link>
                </div>
            </Col>
        </Row>
    )
};

export default Admin
