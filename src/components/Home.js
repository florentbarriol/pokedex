import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import pokemonFeature from '../features/pokemon';
import _ from 'lodash';
import SearchComponent from './SearchComponent';

class Home extends Component {

    handleOnNewRequest(value){
        // todo
    }

    render() {
        const { pokemons } = this.props;
        return (
            <main>
                <SearchComponent
                    onNewRequest={this.handleOnNewRequest.bind(this)}
                />
                <div className="grid-8">
                    {!_.isEmpty(pokemons) && pokemons.map(pokemon => {
                        const id = _.toInteger(pokemon.Number);
                        return <Link to={`/pokemon/${id}`}>
                                <pokemonFeature.components.PokemonImageComponent id={id} alt={pokemon.Name} />
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
