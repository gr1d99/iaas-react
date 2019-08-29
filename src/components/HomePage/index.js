import React from "react";

import { connect } from "react-redux";

import Admin from "./Admin";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";


const HomePage = () => {
    const [{ roles }, ] = useAuthContext();

    return (
        <div className="mt-5">
            { roles.admin ? <Admin/> : <React.Fragment/>}
        </div>
    )
};

const mapStateToProps = ({ notification }) => {
    return { notification }
};

export default connect(mapStateToProps, null)(HomePage);
