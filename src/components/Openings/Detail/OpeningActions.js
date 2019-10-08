import React from "react";

import PropTypes from "prop-types";

import { Link, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAuthContext from "../../../contexts/authentication/hooks/useAuthContext";
import useOpeningOwner from "../hooks/useOpeningOwner";
import routes from "../../../helpers/routePaths";

const OpeningActions = ({ history, user, id, toggleModal, modalOpen }) => {
    const [{authenticated, roles}] = useAuthContext();
    const openingOwner = useOpeningOwner(user);

    return (
        <div className="clearfix">
            <div className="float-left">
                <Link to="#" onClick={history.goBack} className="link text-success">
                    <FontAwesomeIcon icon="chevron-left"/> Go back
                </Link>
            </div>

            { authenticated && roles.admin && openingOwner ? (
                <div className="float-right">
                    <Link to={routes.openings.edit(id)} className="link mr-1 text-success">
                        <FontAwesomeIcon className="ml-1 mr-1" icon="pencil-alt"/> Edit
                    </Link>

                    <Link to="#" className="link ml-1 text-success" onClick={() => toggleModal(!modalOpen)}>
                        <FontAwesomeIcon icon="trash-alt"/> Delete
                    </Link>
                </div>
            ) : <React.Fragment/> }
        </div>
    )
};

OpeningActions.propTypes = {
    user: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired
};


export default withRouter(OpeningActions)
