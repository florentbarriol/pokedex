import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import headerFeature from '../';

class HeaderComponent extends Component {

    handleToggle = () => this.props.dispatch(headerFeature.actions.toggleSideMenu());

    onClickMenuItem = (path) => {
        this.props.dispatch(headerFeature.actions.hideSideMenu());
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
        stateSideMenu: state.header.stateSideMenu
    }
}

export default connect(mapStateToProps)(HeaderComponent);
