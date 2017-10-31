import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import _ from 'lodash';
import { browserHistory } from 'react-router';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (value) => {
        this.setState({ simple: value }, () => {
            browserHistory.push(`/pokemon/${value}`);
        });

    };

    render() {

        const { pokemons, loading } = this.props;
        return (
            <Autocomplete
                direction="down"
                label="Search a pokemon"
                hint="You can only choose one..."
                multiple={false}
                onChange={this.handleChange}
                source={_.fromPairs(_.map(pokemons, i => [i.id, i.name]))}
                disabled={loading}
                value={this.state.value}
            />

        );
    }
}

SearchComponent.PropTypes = {
    pokemons: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    return {
        pokemons: _.toArray(state.pokemon.listing.data),
        pokemonLoading: state.pokemon.listing.loading
    }
}

export default connect(mapStateToProps)(SearchComponent);
