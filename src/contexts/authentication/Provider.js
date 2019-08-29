import React from "react";

import AuthContext from "./Authentication";

export default ({ reducer, initialState, children }) => {
    return (
        <AuthContext.Provider value={React.useReducer(reducer, initialState)}>
            { children }
        </AuthContext.Provider>
    )
};
