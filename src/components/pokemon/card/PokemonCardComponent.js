import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import * as components from '../../';

class PokemonComponent extends Component {

    render() {
        const { pokemon, isComparatorView } = this.props;
        const id = pokemon && pokemon.Number ? _.toInteger(pokemon.Number) : -1;
        return (
            pokemon && id ? (
                <div>
                    <article className="grid-2 has-gutter">
                        <div className="txtcenter">
                            <components.PokemonImageComponent id={id} alt={pokemon.Name} isLarge />
                        </div>
                        <div>
                            <h1>{pokemon.Name}</h1>
                            <components.PokemonTypesComponent types={pokemon.Types} />
                            <p>{`weight : ${pokemon.Weight.Minimum} to ${pokemon.Weight.Maximum}`}</p>
                            <p>{`height : ${pokemon.Height.Minimum} to ${pokemon.Height.Maximum}`}</p>
                            <p>{`generation : ${pokemon.Generation}`}</p>
                            <p>{`maximum HP : ${pokemon.MaxHP}`}</p>
                            <p>{`maximum CP : ${pokemon.MaxCP}`}</p>
                            <components.PokemonResistantComponent resistant={pokemon.Resistant} />
                            <components.PokemonWeaknessComponent weakness={pokemon.Weaknesses} />
                            {isComparatorView && (<p>{pokemon.About}</p>)}
                            <div><components.ButtonComparatorComponent id={id} /></div>
                        </div>
                    </article>
                    <components.PokemonAttacksComponent attacks={_.concat(pokemon.FastAttacks, pokemon.SpecialAttacks)} />
                    <components.PokemonEvolutionsComponent
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
    pokemon: PropTypes.object.isRequired,
    isComparatorView: PropTypes.bool
}

export default PokemonComponent;
