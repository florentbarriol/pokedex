import { createReducer } from './utils';
import {
    TOGGLE_STATE_APPBAR, HIDE_STATE_APPBAR,
    COMPARATOR_ADD_POKEMON, COMPARATOR_CLEAR_POKEMON, COMPARATOR_REMOVE_POKEMON
} from './constants';
import pokemons from './json/pokemons.json';
import _ from 'lodash';

const initialState = {
    stateSideMenu: false,
    comparator: [],
    pokemons
}

export const  reducer = createReducer(initialState, {
    [TOGGLE_STATE_APPBAR](state, action) {
        return _.merge({}, state, { stateSideMenu: !state.stateAppBar });
    },
    [HIDE_STATE_APPBAR](state, action) {
        return _.merge({}, state, { stateSideMenu: false });
    },
    [COMPARATOR_ADD_POKEMON](state, action) {
        return _.merge({}, state, { comparator: _.concat(state.comparator, [action.id]) });
    },
    [COMPARATOR_REMOVE_POKEMON](state, action) {
        return _.merge({}, state, _.remove(state.comparator, (id) => id === action.id));
    },
    [COMPARATOR_CLEAR_POKEMON](state, action) {
        return _.merge({}, state, { comparator: [] });
    }
});
