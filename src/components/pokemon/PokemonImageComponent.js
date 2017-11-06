import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PATH_LARGE_IMG_POKEMON, PATH_SMALL_IMG_POKEMON, EXT_IMG_POKEMON } from '../../constants';


class PokemonImageComponent extends Component {

    render() {
        const { id, alt, isLarge } = this.props;
        return <img
            src={`${isLarge ? PATH_LARGE_IMG_POKEMON : PATH_SMALL_IMG_POKEMON}${id}${EXT_IMG_POKEMON}`} alt={alt} />;
    }

}

PokemonImageComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    isLarge: PropTypes.bool
}

export default PokemonImageComponent;
