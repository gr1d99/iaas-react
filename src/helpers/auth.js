import { Cookies } from "react-cookie";

import jsonwebtoken from "jsonwebtoken";

import { ADMIN_ROLE } from "../constants/roles";

const cookies = new Cookies();
const APP_DOMAIN = process.env.REACT_APP_DOMAIN;
const AUTH_TOKEN_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY;

export const removeAuthToken = () => {
    cookies.remove(AUTH_TOKEN_KEY, {
        domain: APP_DOMAIN,
        path: "/"
    });
};

export const setAuthToken = (token) => {
    cookies.set(AUTH_TOKEN_KEY, token, {
        domain: APP_DOMAIN,
        path: "/"
    })
};

export const getJwtToken = () => {
    return cookies.get(AUTH_TOKEN_KEY, {
        domain: APP_DOMAIN,
        path: "/"
    })
};

export const getUserRole = () => {
    return !!getJwtToken() ? jsonwebtoken.decode(getJwtToken()).role : null
};

export const userIsAdmin = () => {
    return getUserRole() === ADMIN_ROLE
};

export const currentUser =  () => {
    return !!getJwtToken() ? jsonwebtoken.decode(getJwtToken()) : null
};

