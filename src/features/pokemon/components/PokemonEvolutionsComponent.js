import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Step,
    Stepper,
    StepLabel,
  } from 'material-ui/Stepper';
import PokemonImageComponent from './PokemonImageComponent';

class PokemonEvolutionsComponent extends Component {

        render() {
            const { evolutions, id } = this.props;
            return(
                <section>
                    <h2>Evolutions</h2>
                    <Stepper activeStep={0}>
                        {evolutions.map((e, i) => {
                            return <Step key={i}>
                                <StepLabel>
                                    <PokemonImageComponent id={id} />
                                    {e.Name}
                                </StepLabel>
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
