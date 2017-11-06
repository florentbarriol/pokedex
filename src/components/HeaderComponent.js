import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-router';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }

    handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

    onClickMenuItem = (path) => { this.setState({ drawerOpen: false }, () => { browserHistory.push(path); }); };

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
                    <MenuItem onClick={this.onClickMenuItem('/')}>Pokemons List</MenuItem>
                    <MenuItem onClick={this.onClickMenuItem('/about')}>About</MenuItem>
                </Drawer>
            </AppBar>
        );
    }
}

export default connect()(HeaderComponent);
