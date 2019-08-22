import React from "react";

import { connect } from "react-redux";

import withAuthentication from "../HOCs/withAuthentication";

import Admin from "./Admin";
import withAlertMessage from "../HOCs/withAlertMessage";

class HomePage extends React.Component {
    render() {
        return (
            <div className="mt-5">
                { this.props.admin ? <Admin/> : ''}
            </div>
        )
    }
}

const mapStateToProps = ({ user, notification }) => {
    return {
        user,
        notification
    }
};

export default connect(mapStateToProps, null)(withAuthentication(withAlertMessage(HomePage)));
