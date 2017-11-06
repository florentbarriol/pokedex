import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as components from '../../';

class PokemonTypesComponent extends Component {

    render() {
        const { types } = this.props;
        return (
            <section>
                <components.PokemonTypesChipList
                    label="Types"
                    types={types}
                />
            </section>
        );
    }
}

PokemonTypesComponent.PropTypes = {
    types: PropTypes.array.isRequired
}

export default PokemonTypesComponent;
