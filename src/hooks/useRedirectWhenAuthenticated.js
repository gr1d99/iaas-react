import { useState, useEffect } from "react";

import { Cookies } from "react-cookie";

const cookies = new Cookies();

const useRedirectWhenAuthenticated = () => {
    const hasToken = !!cookies.get("jwtToken");

    const [ authenticated, setAuthenticated] = useState(hasToken);

    useEffect(() => {
        setAuthenticated(hasToken)
    }, [hasToken]);

    return authenticated
};

export default useRedirectWhenAuthenticated;
