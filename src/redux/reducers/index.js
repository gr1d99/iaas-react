import { combineReducers } from 'redux';

import user from './user';
import notification from './notification';
import opening from './opening';
import request from "./request"

const iapsBackendApp = combineReducers({
    notification,
    opening,
    request,
    user
});

export default iapsBackendApp;
