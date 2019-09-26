import React from "react";

import { Link } from "react-router-dom";

import { Container, Jumbotron } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuthContext from "../../../contexts/authentication/hooks/useAuthContext";

import routes from "../../../helpers/routes";

export default () => {
    const [{ roles }] = useAuthContext();

    return (
        <Container fluid className="mt-5">
            <Jumbotron className="text-center">
                <h3 className="display-4">Oops!! There are no openings yet</h3>
                { roles.admin ? <Link to="/o/create" className="link add-opening-link"><FontAwesomeIcon icon="plus"/> Add an opening</Link> : <p>Check in later</p> }
            </Jumbotron>
        </Container>
    )
};
