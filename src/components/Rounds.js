import React from 'react';
import PropTypes from 'prop-types';
import { Margin } from 'styled-components-spacing';

const Rounds = ({
  rounds
}) => (
  <div>
    {rounds.map(round => {
      <Margin top={1}>{JSON.stringify(round)}</Margin>
    })}
  </div>
);

Rounds.propTypes = {
  rounds: PropTypes.array.isRequired
}

export default Rounds;
