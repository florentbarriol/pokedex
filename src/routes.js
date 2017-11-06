import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import * as components from './components';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={components.HomePage}/>
    <Route path="about" component={components.AboutPage}/>
        <Route
            path="pokemon/:id"
            component={components.PokemonPage} />
        <Redirect from="*" to="/" />
    </Route>
)
