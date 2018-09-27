import React from 'react';
import PropTypes from 'prop-types';

const Rounds = ({ rounds }) => (
  <div className="box">
    {rounds.map(round => {
      <div>{JSON.stringify(round)}</div>;
    })}
  </div>
);

Rounds.propTypes = {
  rounds: PropTypes.array.isRequired
};

export default Rounds;
