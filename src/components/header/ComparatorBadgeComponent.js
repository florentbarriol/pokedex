import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ComparatorBadgeComponent extends Component {

    render() {
        const { nbPokemonsInComparator } = this.props;
        return (
            nbPokemonsInComparator ? (
                <Badge
                    badgeContent={nbPokemonsInComparator}
                    secondary
                    badgeStyle={{ top: 24, right: 24 }}
                >
                    <IconButton tooltip="Compare your choice">
                        <NotificationsIcon />
                    </IconButton>
                </Badge>) : (null)
        );
    }
}

ComparatorBadgeComponent.propTypes = {
    nbPokemonsInComparator: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        nbPokemonsInComparator: state.comparator.length
    }
}

export default connect(mapStateToProps)(ComparatorBadgeComponent);


