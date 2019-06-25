import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import iapsBackendApp from './reducers';

let store;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    const createStoreMiddleware = applyMiddleware(thunk)(createStore);
    store = createStoreMiddleware(
        iapsBackendApp,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

} else {
    store = createStore(
        iapsBackendApp,
        applyMiddleware(thunk)
    );
}
export default store;
