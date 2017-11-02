import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';


class PokemonTypesChipList extends Component {

    render() {
        const { types, chipColor, avatarColor, label } = this.props;
        return (
            <div className="flex-container flex-center-alt">
                {label} :
                {types.map((type, i) => {
                    return (
                        <Chip
                            key={`${type}-${i}`}
                            labelColor="#fff"
                            backgroundColor={chipColor}>
                            <Avatar
                                icon={<FontIcon className="material-icons muidocs-icon-action-home" />}
                                backgroundColor={avatarColor}
                            />
                            {type}
                        </Chip>);
                })}
            </div>
        );
    }
}

PokemonTypesChipList.PropTypes = {
    resistant: PropTypes.array.isRequired
}

export default PokemonTypesChipList;
