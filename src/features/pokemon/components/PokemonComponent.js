import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { CardActions  } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PokemonImageComponent from './PokemonImageComponent';
import PokemonAttacksComponent from './PokemonAttacksComponent';
import PokemonEvolutionsComponent from './PokemonEvolutionsComponent';

class PokemonComponent extends Component {

    render() {
        const { pokemon } = this.props;
        const id = pokemon && pokemon.Number ? _.toInteger(pokemon.Number) : -1;
        return (
            pokemon && id ? (
                <div>
                    <article className="grid-2 has-gutter">
                        <div className="txtcenter">
                            <PokemonImageComponent id={id} alt={pokemon.Name} />
                        </div>
                        <div>
                            <h1>{pokemon.Name}</h1>
                            <p>{`types : ${pokemon.Types.map(t => '  ' + t)}`}</p>
                            <p>{pokemon.About}</p>
                            <CardActions>
                                    <RaisedButton label="Add to comparator" primary />
                            </CardActions>

                        </div>
                    </article>
                    <PokemonAttacksComponent attacks={_.concat(pokemon.FastAttacks, pokemon.SpecialAttacks)} />
                    <PokemonEvolutionsComponent
                        id={id}
                        evolutions={_.concat(_.toArray(pokemon.PreviousEvolutions), _.toArray(pokemon.NextEvolutions))} />
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
