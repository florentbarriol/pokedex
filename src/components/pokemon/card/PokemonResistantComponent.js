import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as components from '../../';
import { green200, green500 } from 'material-ui/styles/colors';

class PokemonResistantComponent extends Component {

    render() {
        const { resistant } = this.props;
        return (
            <section className="flex-container">
                <components.PokemonTypesChipList
                    label="Resistant"
                    types={resistant}
                    chipColor={green200}
                    avatarColor={green500}
                />
            </section>
        );
    }
}

PokemonResistantComponent.PropTypes = {
    resistant: PropTypes.array.isRequired
}

export default PokemonResistantComponent;
