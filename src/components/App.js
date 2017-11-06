import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterComponent from './FooterComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import headerFeature from '../features/header';

import 'normalize.css';
import '../scss/main.scss';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="app flex-container-v">
                    <headerFeature.components.HeaderComponent />
                    {this.props.children}
                    <FooterComponent/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect()(App);
