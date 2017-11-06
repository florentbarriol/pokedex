import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { addPokemonComparator, removePokemonComparator } from '../../actions';


class ButtonComparatorComponent extends Component {

    onClickButton = () => {
        const { isPokemonInComparator, dispatch, id } = this.props;
        dispatch(isPokemonInComparator ? removePokemonComparator(id)
            : addPokemonComparator(id));
    };

    render() {
        const { isPokemonInComparator } = this.props;
        return (
            <FloatingActionButton
                label={isPokemonInComparator ? 'Remove to comparator' : 'Add to comparator'}
                onClick={this.onClickButton.bind(this)}
                secondary={isPokemonInComparator}
            >
                {isPokemonInComparator ? <ContentRemove /> : <ContentAdd />}
            </FloatingActionButton>
        );
    }

}

ButtonComparatorComponent.PropTypes = {
    id: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps;
    return {
        isPokemonInComparator: state.comparator.includes(id)
    }
}

export default connect(mapStateToProps)(ButtonComparatorComponent);
