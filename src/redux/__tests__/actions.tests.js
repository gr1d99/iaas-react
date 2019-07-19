import * as actions from '../actions';
import * as types from '../actionTypes';

describe('actions', () => {
    it('should create an action to start request', () => {
        const expectedAction = {
            type:   types.REQUEST_STARTED,
            status: types.STATUSES.loading
        };

        expect(actions.requestStarted()).toEqual(expectedAction)
    });

    it('should create an action to finish request', () => {
        const expectedAction = {
            type:   types.REQUEST_DONE,
            status: types.STATUSES.done
        };

        expect(actions.requestFinished()).toEqual(expectedAction)
    });

    it('should create an action to login user', () => {
        const userData = { name: 'gideon' };
        const jwtToken = 'ab.cd.ef';
        const opts     = { data: userData, jwtToken: jwtToken };

        const expectedAction = {
            type:     types.LOGIN_SUCCESS,
            status:   types.STATUSES.success,
            data:     userData,
            jwtToken: jwtToken
        };

        expect(actions.loginSuccess(opts)).toEqual(expectedAction)
    });

    it('should create an action for login failure', () => {
        const jwtToken = null;
        const failureData = {
            errors: [
                'invalid password'
            ]
        };
        const opts = {
            data: failureData,
            jwtToken
        };

        const expectedAction = {
            type:     types.LOGIN_FAILURE,
            status:   types.STATUSES.failure,
            data:     failureData,
            jwtToken: jwtToken
        };

        expect(actions.loginFailure(opts)).toEqual(expectedAction)
    });

    it('should create a logout action', () => {
        const expectedAction = {
            type:   types.LOGOUT_SUCCESS,
            status: types.STATUSES.success
        };

        expect(actions.logoutSuccess()).toEqual(expectedAction)
    });

    it('should create an action for user creation failure', () => {
        const errors = {
            email: ['already exist']
        };

        const expectedAction = {
            type:             types.CREATE_USER_FAILURE,
            createUserErrors: errors,
            status:           types.STATUSES.failure
        };

        expect(actions.createUserFailure(errors)).toEqual(expectedAction)
    });

    it('should create a successful user creation action', () => {
        const opts = {
            data: {
                user: { name: 'gideon' },
            },
            jwtToken: '12.34.56'
        };

        const expectedAction = {
            type:     types.CREATE_USER_SUCCESS,
            status:   types.STATUSES.success,
            data:     opts.data,
            jwtToken: opts.jwtToken
        };

        expect(actions.createUserSuccess(opts)).toEqual(expectedAction)
    });

    it('should create notification alert action', () => {
        const message = 'hello world';
        const kind = 'info';

        const expectedAction = {
            type:         types.NOTIFICATION_ALERT,
            alertMessage: message,
            kind
        };

        expect(actions.notificationAlert({message, kind})).toEqual(expectedAction)
    });

    it('should create an action to clear notification alert', () => {
        expect(actions.clearNotificationAlert()).toEqual({type: types.CLEAR_NOTIFICATION_ALERT})
    });
});
