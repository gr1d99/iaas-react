import React from "react";

import { connect } from "react-redux";

import Admin from "./Admin";

import useAdminAuthorization from "../../hooks/useAdminAuthorization";

const HomePage = () => {
    const admin = useAdminAuthorization();

    return (
        <div className="mt-5">
            { admin ? <Admin/> : <React.Fragment/>}
        </div>
    )
};

const mapStateToProps = ({ user, notification }) => {
    return { notification }
};

export default connect(mapStateToProps, null)(HomePage);
