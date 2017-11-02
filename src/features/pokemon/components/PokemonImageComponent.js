import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pokemonFeature from '../';


class PokemonImageComponent extends Component {

    render() {
        const { id, alt, isLarge } = this.props;
        const { constants } = pokemonFeature;
        return <img
            src={`${isLarge ? constants.PATH_LARGE_IMG_POKEMON : constants.PATH_SMALL_IMG_POKEMON}${id}${constants.EXT_IMG_POKEMON}`} alt={alt} />;
    }

}

PokemonImageComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    isLarge: PropTypes.bool
}

export default PokemonImageComponent;
