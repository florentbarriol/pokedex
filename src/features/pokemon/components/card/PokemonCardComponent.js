import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import * as pokemonComponents from '../';

class PokemonComponent extends Component {

    render() {
        const { pokemon } = this.props;
        const id = pokemon && pokemon.Number ? _.toInteger(pokemon.Number) : -1;
        return (
            pokemon && id ? (
                <div>
                    <article className="grid-2 has-gutter">
                        <div className="txtcenter">
                            <pokemonComponents.PokemonImageComponent id={id} alt={pokemon.Name} isLarge />
                        </div>
                        <div>
                            <h1>{pokemon.Name}</h1>
                            <pokemonComponents.PokemonTypesComponent types={pokemon.Types} />
                            <p>{`weight : ${pokemon.Weight.Minimum} to ${pokemon.Weight.Maximum}`}</p>
                            <p>{`height : ${pokemon.Height.Minimum} to ${pokemon.Height.Maximum}`}</p>
                            <p>{`generation : ${pokemon.Generation}`}</p>
                            <p>{`maximum HP : ${pokemon.MaxHP}`}</p>
                            <p>{`maximum CP : ${pokemon.MaxCP}`}</p>
                            <pokemonComponents.PokemonResistantComponent resistant={pokemon.Resistant} />
                            <pokemonComponents.PokemonWeaknessComponent weakness={pokemon.Weaknesses} />
                            <p>{pokemon.About}</p>
                            <CardActions>
                                <RaisedButton label="Add to comparator" primary />
                            </CardActions>

                        </div>
                    </article>
                    <pokemonComponents.PokemonAttacksComponent attacks={_.concat(pokemon.FastAttacks, pokemon.SpecialAttacks)} />
                    <pokemonComponents.PokemonEvolutionsComponent
                        id={id}
                        evolutions={_.concat(_.toArray(pokemon.PreviousEvolutions), [pokemon], _.toArray(pokemon.NextEvolutions))} />
                </div>
            ) : (
                    <div>Chargement...</div>
                )
        );
    }

}

PokemonComponent.PropTypes = {
    pokemon: PropTypes.object.isRequired
}

export default PokemonComponent;
