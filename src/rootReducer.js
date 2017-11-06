import { combineReducers } from 'redux';
import headerFeature from './features/header';
import pokemonFeature from './features/pokemon';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    [headerFeature.constants.NAME]: headerFeature.reducer,
    [pokemonFeature.constants.NAME]: pokemonFeature.reducer,
    routing: routerReducer
});

export default rootReducer;
