import React from "react";

import {getJwtToken} from "../helpers/auth";


const useAuthentication = () => {
    const jwtTokenExists = !!getJwtToken();
    const [authenticated, setAuthenticated] = React.useState(jwtTokenExists);


    React.useEffect(() => {
        setAuthenticated(jwtTokenExists)
    }, [jwtTokenExists]);

    return authenticated
};

export default useAuthentication;
