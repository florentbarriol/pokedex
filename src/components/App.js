import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as components from './';

import 'normalize.css';
import '../scss/main.scss';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="app flex-container-v">
                    <components.HeaderComponent />
                    {this.props.children}
                    <components.FooterComponent/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
