import { reducer } from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


export default function configureStore(initialState) {
    let middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares = [...middlewares, logger];
    }

    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;

}
