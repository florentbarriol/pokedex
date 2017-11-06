import { createReducer } from '../../utils';
import { TOGGLE_STATE_APPBAR, HIDE_STATE_APPBAR } from './constants';
import _ from 'lodash';

const initialState = {
    stateSideMenu: false
}

export const reducer = createReducer(initialState, {
    [TOGGLE_STATE_APPBAR](state, action) {
        return _.merge({}, { stateSideMenu: !state.stateAppBar });
    },
    [HIDE_STATE_APPBAR](state, action) {
        return _.merge({}, { stateSideMenu: false });
    }
});
