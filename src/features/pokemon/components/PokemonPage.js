import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import pokemonFeature from '../';
import _ from 'lodash';
import RaisedButton from 'material-ui/RaisedButton';

class PokemonPage extends Component {

    render() {
        const { id } = this.props.routeParams;
        const { pokemons } = this.props;
        const pokemon = _.filter(pokemons, p => _.toInteger(id) === _.toInteger(p.Number))[0];
        return (
            <main>
                <pokemonFeature.components.PokemonComponent pokemon={pokemon} />
                <div className="mtm mbm">
                    <Link to="/">
                        <RaisedButton label="Retour" fullWidth />
                    </Link>
                </div>
            </main>
        );
    }

}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemon.pokemons
    }
}

export default connect(mapStateToProps)(PokemonPage);
