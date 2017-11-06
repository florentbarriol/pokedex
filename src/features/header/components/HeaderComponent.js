import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import headerFeature from '../';

class HeaderComponent extends Component {

    handleToggle = () => this.props.dispatch(headerFeature.actions.toggleSidemenu());

    onClickMenuItem = (path) => {
        this.props.dispatch(headerFeature.actions.toggleSidemenu());
        setTimeout(() => {
            browserHistory.push(path);
        }, 1);
    };

    render() {
        const { stateAppBar } = this.props;
        return (
            <AppBar
                className="appBar"
                title="Pokedex"
                onTitleTouchTap={this.onClickMenuItem.bind(this, '/')}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            >
                <Drawer
                    docked={false}
                    open={stateAppBar}
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
        stateAppBar: state.header.stateAppBar
    }
}

export default connect(mapStateToProps)(HeaderComponent);
