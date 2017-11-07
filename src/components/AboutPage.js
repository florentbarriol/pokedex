import React, { Component } from 'react';

class AboutPage extends Component {

    componentWillMount(){

    }

    render() {
        return (
            <main>
                <h1>About Pokedex</h1>
                <p>
                    This app is a simple pokedex index built with ReactJs, Redux, SCSS, Material-ui &amp; many others cool libs.
                </p>
                <p>All content is &copy; Nintendo, Game Freak, and The Pokémon Company.</p>
                <p>Feel free to contact me at courrier (at) florentbarriol dot com for more.</p>
            </main>
        );
    }
}

export default AboutPage;
