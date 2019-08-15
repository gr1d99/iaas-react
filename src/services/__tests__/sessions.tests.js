import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { Cookies } from 'react-cookie';

import axiosInstance from 'axios';

import {
    loginFailure,
    loginSuccess,
    logoutSuccess,
    notificationAlert,
    requestStarted,
    requestFinished
} from '../../redux/actions';

import { createUserSession } from "../sessions";

describe('createUserSession', () => {
    it('creates ', () => {
        const middlewares = [thunk];
        const mockStore  = configureMockStore(middlewares);

        const email    = 'test.user@email.com';
        const password = 'testuserpassword';
        const userData = { session: { email, password }};


        const cookies = new Cookies();


        const responseData = {
            data: {
                id: 4,
                type: "users",
                attributes: {
                    email: "test@user.com"
                }
            },
            headers: {
                "X-Access-Token": "ab.cd.ef"
            }
        };

        axiosInstance.post.mockImplementationOnce(() => {
            Promise.resolve(responseData)
        });

        const store = mockStore({
            status:           '',
            data:             {},
            jwtToken:         null,
            createUserErrors: {}
        });

        createUserSession(userData, cookies);

        console.log(store.getActions())
    });
});
