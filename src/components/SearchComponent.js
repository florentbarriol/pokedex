import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import _ from "lodash";
import AutoComplete from "material-ui/AutoComplete";

class SearchComponent extends Component {

    render() {
        const { pokemons, onNewRequest } = this.props;
        const data = _.reduce(pokemons, (res, val) => {
            res.push(val.Name);
            return res;
        }, []);
        return (
            <div className="search">
                <AutoComplete
                    floatingLabelText="Search your pokemon"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={data}
                    maxSearchResults={5}
                    fullWidth
                    onNewRequest={chosenReq => {
                        console.log(chosenReq);
                        onNewRequest(chosenReq);
                    }}
                />
            </div>
        );
    }
}

SearchComponent.PropTypes = {
    pokemons: PropTypes.array.isRequired,
    onNewRequest: PropTypes.func
};

const mapStateToProps = state => {
    return {
        pokemons: state.pokemon.pokemons
    };
};

export default connect(mapStateToProps)(SearchComponent);
