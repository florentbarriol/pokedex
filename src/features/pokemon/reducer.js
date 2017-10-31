import { combineReducers } from 'redux';
import { pokemonReducer } from './reducers/pokemonReducer';
import { pokemonDetailsReducer } from './reducers/pokemonDetailsReducer';



export const reducer = combineReducers({
    listing: pokemonReducer,
    details: pokemonDetailsReducer
});
