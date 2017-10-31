import { combineReducers } from 'redux';
import pokemonFeature from './features/pokemon';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    [pokemonFeature.constants.NAME]: pokemonFeature.reducer,
    routing: routerReducer
});

export default rootReducer;
