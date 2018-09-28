import React from 'react';
import PropTypes from 'prop-types';

import sides from '../constants/sides';

const SideSelector = ({ selectSide, side }) => (
  <div className="tabs is-toggle is-fullwidth">
    <ul>
      {sides.map(({ id, name }) => (
        <li className={side === id ? 'is-active' : ''} key={id}>
          <a onClick={() => selectSide(id)}>{name}</a>
        </li>
      ))}
    </ul>
  </div>
);

SideSelector.propTypes = {
  selectSide: PropTypes.func.isRequired
};

export default SideSelector;
