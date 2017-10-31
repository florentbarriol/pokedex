import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import pokemonFeature from '../';

class PokemonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }

    componentDidMount() {
        this._loadPokemonDetails(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.id !== nextProps.id) {
            console.log(this.state.id, nextProps.id)
            //this._loadPokemonDetails(nextProps);
        }
    }

    _loadPokemonDetails({ id }) {
        this.props.dispatch(pokemonFeature.actions.fetchPokemonDetails(id));
    }

    render() {
        const { pokemonDetail, id, loading } = this.props;
        return (
            <div className="pokemon">
                {loading || _.isEmpty(pokemonDetail) ? (
                    <p>Chargement...</p>
                ) : (
                        <p>
                            Pokemon id : {id}<br />
                            <img src={pokemonDetail.sprites.front_default} alt={pokemonDetail.name} />
                            {pokemonDetail ? pokemonDetail.name : 'NaN'}
                        </p>
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;
    return {
        pokemonDetail: _.toPlainObject(state.pokemon.details.data[id]),
        loading: state.pokemon.details.loading
    }
}

PokemonComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    pokemon: PropTypes.object
}

export default connect(mapStateToProps)(PokemonComponent);
