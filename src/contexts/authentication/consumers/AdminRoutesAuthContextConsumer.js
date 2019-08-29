import React from "react";

import { Redirect, Route } from "react-router-dom";

import AuthContext from "../Authentication";

export default ({component: Component, ...rest }) => {
    return (
        <AuthContext.Consumer>
            {
                ([{authenticated, roles}]) => (
                    <Route {...rest } render={(props) => {
                        if (authenticated && roles.admin) {
                            return <Component/>
                        }
                        if (authenticated && !roles.admin){
                            return <Redirect to={{pathname: "/"}}/>
                        }

                        return <Redirect to={{pathname: "/sign_in"}}/>
                    }}/>
                )
            }
        </AuthContext.Consumer>
    )
};
