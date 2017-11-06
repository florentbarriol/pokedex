import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonAttacksComponent extends Component {

    render() {
        const { attacks } = this.props;
        return(
            <section>
                <h2>Attacks</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Damage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attacks.map((att, i) => {
                            return <tr key={i}>
                                <td>{att.Name}</td>
                                <td>{att.Type}</td>
                                <td>{att.Damage}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        );
    }

}

PokemonAttacksComponent.PropTypes = {
    attacks: PropTypes.array.isRequired
}

export default PokemonAttacksComponent;
