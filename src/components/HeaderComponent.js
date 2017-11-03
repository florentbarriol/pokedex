import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }

    handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

    handleClose = () => this.setState({ drawerOpen: false });

    render() {
        return (
            <AppBar
                className="appBar"
                title="Pokedex"
                onTitleTouchTap={() => browserHistory.push('/')}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
            >
                <Drawer
                    docked={false}
                    open={this.state.drawerOpen}
                    onRequestChange={(drawerOpen) => this.setState({ drawerOpen })}
                    className="drawer"
                >
                    <AppBar title="Pokedex" showMenuIconButton={false} />
                    <MenuItem onClick={() => browserHistory.push('/')}>Pokemons List</MenuItem>
                    <MenuItem onClick={() => { browserHistory.push('/about') }}>About</MenuItem>
                </Drawer>
            </AppBar>
        );
    }
}

export default HeaderComponent;
