import React from "react";

import { Cookies } from "react-cookie";

import jsonwebtoken from "jsonwebtoken";

import { ADMIN_ROLE } from "../constants/roles";


const useAdminAuthorization = () => {
    const jwtToken = new Cookies().get("jwtToken");
    const isAdmin = !!jwtToken ? jsonwebtoken.decode(jwtToken).role === ADMIN_ROLE : !!jwtToken;
    const [admin, setAdmin] = React.useState(isAdmin);

    React.useEffect(() => {
        setAdmin(isAdmin)
    }, [isAdmin]);

    return admin
};


export default useAdminAuthorization;
