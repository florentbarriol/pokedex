import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
        margin: '.25rem',
    }
}

class PokemonTypesChipList extends Component {

    render() {
        const { types, chipColor, label } = this.props;
        return (
            <div className="flex-container flex-center-alt types">
                {label} :
                {types.map((type, i) => {
                    return (
                        <Chip
                            key={`${type}-${i}`}
                            labelColor="#fff"
                            backgroundColor={chipColor}
                            style={styles.chip}
                        >
                            {type}
                        </Chip>);
                })}
            </div>
        );
    }
}

PokemonTypesChipList.PropTypes = {
    types: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    chipColor: PropTypes
}

export default PokemonTypesChipList;
