import React, { Component } from 'react';
import { connect } from 'react-redux';
import pokemonFeature from '../features/pokemon';
import HeaderComponent from './header/HeaderComponent';

class App extends Component {

    componentWillMount() {
        this.props.dispatch(pokemonFeature.actions.fetchPokemons());
    }

    render() {
        return (
            <div className="app">
                <HeaderComponent />
                {this.props.children}
                <footer>footer</footer>
            </div>
        );
    }
}

export default connect()(App);
