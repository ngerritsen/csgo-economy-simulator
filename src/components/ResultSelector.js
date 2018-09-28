import React from 'react';
import PropTypes from 'prop-types';

import { Result } from '../propTypes';

const ResultSelector = ({ results, submit }) => (
  <div className="buttons">
    {results.map(result => (
      <button
        key={result.type}
        onClick={() => submit(result.type)}
        className={'button ' + (result.positive ? 'is-success' : 'is-danger')}
      >
        {result.name}
      </button>
    ))}
  </div>
);

ResultSelector.propTypes = {
  results: PropTypes.arrayOf(Result).isRequired
};

export default ResultSelector;
