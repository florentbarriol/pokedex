import { makeActionCreator } from './utils';
import { TOGGLE_STATE_APPBAR, HIDE_STATE_APPBAR,
     COMPARATOR_ADD_POKEMON, COMPARATOR_REMOVE_POKEMON, COMPARATOR_CLEAR_POKEMON } from './constants';

// show or hide the side menu
export const toggleSideMenu = makeActionCreator(TOGGLE_STATE_APPBAR);

// hide the side menu
export const hideSideMenu = makeActionCreator(HIDE_STATE_APPBAR);

// add a pokemon to the comparator
export const addPokemonComparator = makeActionCreator(COMPARATOR_ADD_POKEMON, 'id');

// remove a pokemon to the comparator
export const removePokemonComparator = makeActionCreator(COMPARATOR_REMOVE_POKEMON, 'id');

// clear the array of pokemon in the comparator
export const clearPokemonComparator = makeActionCreator(COMPARATOR_CLEAR_POKEMON);
