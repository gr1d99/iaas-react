import React from "react";

import jsonwebtoken from "jsonwebtoken";

import { ADMIN_ROLE } from "../../constants/roles";

const withAuthentication = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return <WrappedComponent authenticated={this.authenticated()} admin={this.admin()} {...this.props} />
        }

        authenticated = () => {
            return !!this.props.user.jwtToken;
        };

        admin = () => {
            return this.authenticated() ? jsonwebtoken.decode(this.props.user.jwtToken).role === ADMIN_ROLE : false
        };
    }
};

export default withAuthentication;
