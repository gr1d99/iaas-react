import jsonwebtoken from "jsonwebtoken";

import { ADMIN_ROLE } from "../constants/roles";

export const authenticated = (user) => {
    return !!user.jwtToken
};

export const isAdmin = (user) => {
    return authenticated(user) ? jsonwebtoken.decode(user.jwtToken).role === ADMIN_ROLE : false
};
