import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import PokemonImageComponent from './PokemonImageComponent';
import _ from 'lodash';

const StepLabelCustom = ({ id, evolutionId, link }) => {
    return <StepLabel>
        <PokemonImageComponent id={evolutionId} />
    </StepLabel>
}

const StepLabelLinkWrapp = (StepLabelCustom) => (props) => {
    if (props.link) {
        return <StepLabelCustom { ...props} />;
    } else {
        return <Link to={props.id !== props.evolutionId ? `/pokemon/${props.evolutionId}` : ''}>
            <StepLabelCustom { ...props} />
        </Link>
    }
}

class PokemonEvolutionsComponent extends Component {

    render() {
        const { evolutions, id } = this.props;
        return (
            <section>
                <h2>Evolutions</h2>
                <Stepper connector={<ArrowForwardIcon />}>
                    {evolutions.map((e, i) => {
                        const evolutionId = _.toInteger(e.Number);
                        return <Step key={i} active={id === evolutionId}>
                            StepLabelLinkWrapp(StepLabelCustom);
                        </Step>
                    })}
                </Stepper>
            </section>
        );
    }
}

PokemonEvolutionsComponent.PropTypes = {
    id: PropTypes.number.isRequired,
    evolutions: PropTypes.array.isRequired
}

export default PokemonEvolutionsComponent;
