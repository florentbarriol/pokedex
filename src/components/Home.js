import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        const { pokemonLoading } = this.props;
        return (
            <main>
                hello home
                {pokemonLoading && (
                    <div>Chargement des pokémons...</div>
                )}
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        pokemonLoading: state.pokemon.listing.loading
    }
}

export default connect(mapStateToProps)(Home);
