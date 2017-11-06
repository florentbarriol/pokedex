import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import * as components from '../../';
import _ from 'lodash';

const StepLabelCustom = (props) => {
    return <StepLabel>
        <components.PokemonImageComponent {...props} />
    </StepLabel>
}

class PokemonEvolutionsComponent extends Component {

    render() {
        const { evolutions, id } = this.props;
        return (
             evolutions.length > 1 && (
                <section>
                    <h2>Evolutions</h2>
                    <Stepper connector={<ArrowForwardIcon />}>
                        {evolutions.map((e, i) => {
                            const evolutionId = _.toInteger(e.Number);
                            return <Step key={i} active={id === evolutionId}>
                                {id === evolutionId ? (
                                    <StepLabelCustom id={evolutionId} />
                                ) : (
                                        <Link to={id !== evolutionId ? `/pokemon/${evolutionId}` : ''}>
                                            <StepLabelCustom id={evolutionId} />
                                        </Link>
                                    )}
                            </Step>
                        })}
                    </Stepper>
                </section>
            )
        );
    }
}

PokemonEvolutionsComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    evolutions: PropTypes.array.isRequired
}

export default PokemonEvolutionsComponent;
