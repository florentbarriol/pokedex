import React, { Component } from "react";
import { PropTypes } from "prop-types";
import TextField from 'material-ui/TextField';

class SearchComponent extends Component {

    render() {
        const { onChange } = this.props;

        return (
            <div className="search">
                <TextField
                    floatingLabelText="Search a pokemon"
                    onChange={(event, input) => onChange(input)}
                    fullWidth
                />
            </div>
        );
    }
}

SearchComponent.PropTypes = {
    pokemons: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchComponent;
