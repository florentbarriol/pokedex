import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import _ from 'lodash';

class PokemonWeakResistantComponent extends Component {

    render() {
        const { id, resistant, weakness } = this.props;
        return (
            <section>
                <h2>Resistant / Weakness</h2>
                <div className="grid-2 has-gutter">
                    <table>
                        <thead>
                            <tr><th>Resistant versus</th></tr>
                        </thead>
                        <tbody>
                            {resistant.map((r, i) => {
                                return <tr key={`${r}-${i}`}><td className={`type-${r}`}>{r}</td></tr>
                            })}
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr><th>Weak versus</th></tr>
                        </thead>
                        <tbody>
                            {weakness.map((w, i) => {
                                return <tr key={`${w}-${i}`}><td className={`type-${w}`}>{w}</td></tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

PokemonWeakResistantComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    resistant: PropTypes.array.isRequired,
    weakness: PropTypes.array.isRequired
}

export default PokemonWeakResistantComponent;
