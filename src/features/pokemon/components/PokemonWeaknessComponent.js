import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonTypesChipList from './PokemonTypesChipList';
import { red200, red500 } from 'material-ui/styles/colors';

class PokemonWeaknessComponent extends Component {

    render() {
        const { weakness } = this.props;
        return (
            <section>
                <PokemonTypesChipList
                    label="Weakness"
                    types={weakness}
                    chipColor={red200}
                    avatarColor={red500}
                />
            </section>
        );
    }
}

PokemonWeaknessComponent.PropTypes = {
    weakness: PropTypes.array.isRequired
}

export default PokemonWeaknessComponent;
