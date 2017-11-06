import { createReducer } from '../../utils';
import { UPDATE_STATE_APPBAR } from './constants';
import _ from 'lodash';

const initialState = {
    stateAppBar: false
}

export const reducer = createReducer(initialState, {
    [UPDATE_STATE_APPBAR](state, action) {
        return _.merge({},  {stateAppBar: !state.stateAppBar});
    }
});
