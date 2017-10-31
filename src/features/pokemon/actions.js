import {
    REQUEST_POKEMONS, RECEIVE_POKEMONS, FAILURE_POKEMONS,
    REQUEST_POKEMON_DETAILS, RECEIVE_POKEMON_DETAILS, FAILURE_POKEMON_DETAILS
} from './constants';

export function fetchPokemons() {
    return {
        types: [REQUEST_POKEMONS, RECEIVE_POKEMONS, FAILURE_POKEMONS],
        shouldCallAPI: state => !state.pokemons,
        endpoint: '/pokemon?limit=5',
        payload: {}
    }
}

export function fetchPokemonDetails(id) {
    return {
        types: [REQUEST_POKEMON_DETAILS, RECEIVE_POKEMON_DETAILS, FAILURE_POKEMON_DETAILS],
        shouldCallAPI: state => !state.pokemonsDetails || state.pokemonsDetails[id],
        endpoint: `/pokemon/${id}`,
        payload: { id }
    }
}
