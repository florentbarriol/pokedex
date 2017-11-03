import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
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
                <pokemonFeature.components.PokemonCardComponent pokemon={pokemon} />
                <div className="mtm mbm">
                    <RaisedButton
                        label="Go back"
                        fullWidth
                        onClick={() => browserHistory.goBack()} />
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
