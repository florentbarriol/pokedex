import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PokemonImageComponent from './PokemonImageComponent';
import PokemonAttacksComponent from './PokemonAttacksComponent';
import PokemonEvolutionsComponent from './PokemonEvolutionsComponent';
import PokemonResistantComponent from './PokemonResistantComponent';
import PokemonWeaknessComponent from './PokemonWeaknessComponent';

class PokemonComponent extends Component {

    render() {
        const { pokemon } = this.props;
        const id = pokemon && pokemon.Number ? _.toInteger(pokemon.Number) : -1;
        return (
            pokemon && id ? (
                <div>
                    <article className="grid-2 has-gutter">
                        <div className="txtcenter">
                            <PokemonImageComponent id={id} alt={pokemon.Name} isLarge />
                        </div>
                        <div>
                            <h1>{pokemon.Name}</h1>
                            <p>{`types : ${pokemon.Types.map(t => '  ' + t)}`}</p>
                            <p>{`weight : ${pokemon.Weight.Minimum} to ${pokemon.Weight.Maximum}`}</p>
                            <p>{`height : ${pokemon.Height.Minimum} to ${pokemon.Height.Maximum}`}</p>
                            <p>{`generation : ${pokemon.Generation}`}</p>
                            <p>{`maximum HP : ${pokemon.MaxHP}`}</p>
                            <p>{`maximum CP : ${pokemon.MaxCP}`}</p>
                            <div>
                                <PokemonResistantComponent resistant={pokemon.Resistant} />
                            </div>
                            <div>
                                <PokemonWeaknessComponent weakness={pokemon.Weaknesses} />
                            </div>
                            <p>{pokemon.About}</p>
                            <CardActions>
                                <RaisedButton label="Add to comparator" primary />
                            </CardActions>

                        </div>
                    </article>
                    <PokemonAttacksComponent attacks={_.concat(pokemon.FastAttacks, pokemon.SpecialAttacks)} />
                    <PokemonEvolutionsComponent
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
