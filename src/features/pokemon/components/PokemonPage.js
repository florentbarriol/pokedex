import React, { Component } from 'react';
import pokemonFeature from '../';

class PokemonPage extends Component {

    render() {
        const { id } = this.props.routeParams;
        return (
            <main>
                <pokemonFeature.components.PokemonComponent id={id} />
            </main>
        );
    }

}

export default PokemonPage;
