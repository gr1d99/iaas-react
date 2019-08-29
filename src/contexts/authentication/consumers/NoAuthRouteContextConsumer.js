import React from "react";

import { Redirect, Route } from "react-router-dom";

import AuthContext from "../Authentication";

export default ({ component: Component, ...rest }) => {
    return (
        <AuthContext.Consumer>
            {
                ([{authenticated}]) => {
                    return <Route { ...rest } render={
                        () => {
                            return authenticated ? <Redirect to="/"/> : <Component/>
                        }
                    }/>
                }
            }
        </AuthContext.Consumer>
    )
}
