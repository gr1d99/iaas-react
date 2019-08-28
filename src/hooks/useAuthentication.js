import React from "react";

import { Cookies } from "react-cookie";


const cookies = new Cookies();

const useAuthentication = () => {
    const jwtTokenExists = !!cookies.get("jwtToken");
    const [authenticated, setAuthenticated] = React.useState(jwtTokenExists);


    React.useEffect(() => {
        setAuthenticated(jwtTokenExists)
    }, [jwtTokenExists]);

    return authenticated
};

export default useAuthentication;
