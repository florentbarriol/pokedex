import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import SearchComponent from './SearchComponent';

class HeaderComponent extends Component {

    render() {
        return (
            <AppBar title="Pokedex" flat>
                <SearchComponent />

            </AppBar>
        );
    }
}

export default HeaderComponent;
