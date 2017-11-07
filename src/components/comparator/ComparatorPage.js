import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as components from '../'

class ComparatorPage extends Component {

    render() {

        const { pokemons } = this.props;

        return (
            <main>
                <div className="grid-4 has-gutter">
                    {!_.isEmpty(pokemons) ? pokemons.map(p => {
                        return <components.PokemonCardComponent
                            key={_.toInteger(p.Number)}
                            pokemon={p}
                        />
                    }) : (
                            <p>Outch ! Your selection is empty :/</p>
                        )}
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        pokemons: _.filter(state.pokemons, (p) => state.comparator.includes(_.toInteger(p.Number)))
    }
}

export default connect(mapStateToProps)(ComparatorPage);
