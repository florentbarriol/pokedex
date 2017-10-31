import { createReducer } from '../../../utils';
import {
    REQUEST_POKEMON_DETAILS, RECEIVE_POKEMON_DETAILS, FAILURE_POKEMON_DETAILS
} from '../constants';
import _ from 'lodash';

const initialState = {
    loading: false,
    data: {},
    error: {
        msg: '',
        type: ''

    }
}

export const pokemonDetailsReducer = createReducer(initialState, {
    [REQUEST_POKEMON_DETAILS](state, action) {
        return _.merge({}, state, {
            loading: true
        })
    },
    [RECEIVE_POKEMON_DETAILS](state, action) {
        return _.merge({}, state, {
            loading: false,
            data: _.merge({}, { [action.id]: action.response })
        })
    },
    [FAILURE_POKEMON_DETAILS](state, action) {
        return _.merge({}, state, {
            loading: false,
            error: {
                msg: action.error,
                type: action.errorType
            }
        })
    },
});
