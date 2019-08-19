import React from "react";

import {
    connect
} from "react-redux";

import Admin from "./Admin";

class HomePage extends React.Component {
    render() {
        return (
            <div className="mt-5">
                { this.props.isAdmin ? <Admin/> : ''}
            </div>
        )
    }
}

const mapStateToProps = ({ user }, ownProps) => {
    return {
        user,
        isAdmin: ownProps.isAdmin(user)
    }
};

export default connect(mapStateToProps, null)(HomePage);
