import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

import { destroyOpening } from "../../../services/openings";

const DeleteOpeningModal = ({ opening, openingId, modalOpen, toggleModal, destroyOpening }) => {
    const toggle = () => {
        return toggleModal(!modalOpen)
    };

    const confirmDelete = () => {
        destroyOpening(openingId)
    };

    return (
        <Modal
            isOpen={modalOpen}
            toggle={toggle}
            className=""
            id="opening-delete">
            <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
            <ModalFooter>
                <Button color="danger"
                        onClick={confirmDelete}>Yes</Button>
                <Button color="success" onClick={toggle}>No</Button>
            </ModalFooter>
        </Modal>
    )
};

DeleteOpeningModal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    destroyOpening: PropTypes.func.isRequired,
    openingId: PropTypes.string.isRequired
};

const mapStateToProps = ({ opening }) => {
    return { opening }
};


export default connect(mapStateToProps,
    { destroyOpening }
)(DeleteOpeningModal);
