import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { hideSideMenu, toggleSideMenu } from '../../actions';
import { ComparatorBadgeComponent } from '../';

class HeaderComponent extends Component {

    handleToggle = () => this.props.dispatch(toggleSideMenu());

    onClickComparatorButton = () => browserHistory.push('/pokemon/comparator');

    onClickMenuItem = (path) => {
        this.props.dispatch(hideSideMenu());
        setTimeout(() => {
            browserHistory.push(path);
        }, 1);
    };

    render() {
        const { stateSideMenu } = this.props;
        return (
            <AppBar
                className="appBar"
                title="Pokedex"
                onTitleTouchTap={this.onClickMenuItem.bind(this, '/')}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                iconElementRight={<ComparatorBadgeComponent />}
                onRightIconButtonTouchTap={this.onClickComparatorButton.bind(this)}
            >
                <Drawer
                    docked={false}
                    open={stateSideMenu}
                    className="drawer"
                >
                    <AppBar title="Pokedex" showMenuIconButton={false} />
                    <MenuItem onClick={this.onClickMenuItem.bind(this, '/')}>Pokemons List</MenuItem>
                    <MenuItem onClick={this.onClickMenuItem.bind(this, '/about')}>About</MenuItem>
                </Drawer>
            </AppBar>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateSideMenu: state.stateSideMenu
    }
}

export default connect(mapStateToProps)(HeaderComponent);
