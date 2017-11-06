import { makeActionCreator } from '../../utils';
import { TOGGLE_STATE_APPBAR, HIDE_STATE_APPBAR } from './constants';

// show or hide the side menu
export const toggleSideMenu = makeActionCreator(TOGGLE_STATE_APPBAR);

// hide the side menu
export const hideSideMenu = makeActionCreator(HIDE_STATE_APPBAR);


