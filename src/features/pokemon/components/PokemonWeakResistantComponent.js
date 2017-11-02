import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _ from 'lodash';

class PokemonWeakResistantComponent extends Component {

    render() {
        const { id } = this.props;
        return (
            <section>
                <h2>Resistant / Weakness</h2>
                TODO
            </section>
        );
    }
}

PokemonWeakResistantComponent.PropTypes = {
    id: PropTypes.number.isRequired
}

export default PokemonWeakResistantComponent;
