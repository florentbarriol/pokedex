import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import pokemonFeature from './features/pokemon';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={AboutPage}/>
        <Route
            path="pokemon/:id"
            component={pokemonFeature.components.PokemonPage} />
        <Redirect from="*" to="/" />
    </Route>
)
