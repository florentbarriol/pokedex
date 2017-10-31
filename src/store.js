import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { callAPIMiddleware } from './middleware/api';


export default function configureStore(initialState) {
    let middlewares = [callAPIMiddleware, thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares = [...middlewares, logger];
    }

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    return store;

}
