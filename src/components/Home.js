import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import pokemonFeature from '../features/pokemon';
import _ from 'lodash';
import SearchComponent from './SearchComponent';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    onChangeSearch(query) {
        this.setState({ query });
    }

    render() {

        const { pokemons } = this.props;
        const pokemonFiltered = this.state.query ? pokemons.filter(pokemon => _.startsWith(_.toLower(pokemon.Name), this.state.query)) : pokemons;

        return (
            <main>
                <SearchComponent
                    onChange={this.onChangeSearch.bind(this)}
                />
                <div className="grid-8">
                    {!_.isEmpty(pokemonFiltered) && pokemonFiltered.map(pokemon => {
                        const id = _.toInteger(pokemon.Number);
                        return <Link to={`/pokemon/${id}`} key={id}>
                            <pokemonFeature.components.PokemonImageComponent id={id} alt={pokemon.Name} isLarge />
                        </Link>
                    })}
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

export default connect(mapStateToProps)(Home);
