import { createReducer } from '../../../utils';
import {
    REQUEST_POKEMONS, RECEIVE_POKEMONS, FAILURE_POKEMONS
} from '../constants';
import _ from 'lodash';

const initialState = {
    loading: false,
    data: [],
    error: {
        msg: '',
        type: ''

    }
}

export const pokemonReducer = createReducer(initialState, {
    [REQUEST_POKEMONS](state, action) {
        return _.merge({}, state, {
            loading: true
        })
    },
    [RECEIVE_POKEMONS](state, action) {
        return _.merge({}, state, {
            loading: false,
            data: _.map(action.response.results, (pokemon, i) => _.set(pokemon, 'id', i + 1))
        });
    },
    [FAILURE_POKEMONS](state, action) {
        return _.merge({}, state, {
            loading: false,
            error: {
                msg: action.error,
                type: action.errorType
            }
        })
    }
});
