import { combineReducers } from 'redux';

import user from './user';
import notification from './notification';

const iapsBackendApp = combineReducers({
    user,
    notification
});

export default iapsBackendApp;
