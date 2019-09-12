import React from "react";

import { connect } from "react-redux";

import { Container } from "reactstrap";

import Admin from "./Admin";

import useAuthContext from "../../contexts/authentication/hooks/useAuthContext";


const HomePage = () => {
    const [{ roles }, ] = useAuthContext();

    return (
        <Container className="mt-5">
            { roles.admin ? <Admin/> : <React.Fragment/>}
        </Container>
    )
};

const mapStateToProps = ({ notification }) => {
    return { notification }
};

export default connect(mapStateToProps, null)(HomePage);
