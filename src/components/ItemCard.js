import React from 'react';
import PropTypes from 'prop-types';

import { Item } from '../propTypes';

const ItemCard = ({ item: { name, cost, id }, onClick, isAffordable }) => (
  <div
    onClick={isAffordable ? onClick : undefined}
    style={{
      height: '100%',
      cursor: isAffordable ? 'pointer' : 'default',
      opacity: isAffordable ? 1 : 0.7
    }}
  >
    <figure
      style={{
        height: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0.8rem'
      }}
    >
      <img
        style={{ maxHeight: '100%', width: 'auto' }}
        src={`/img/weapon-thumbnails/${id}.png`}
        alt={name}
      />
    </figure>
    <strong>{name}</strong>
    <br />
    <span className={isAffordable ? '' : ' has-text-danger'}>
      ${cost + ',-'}
    </span>
  </div>
);

ItemCard.propTypes = {
  item: Item,
  isAffordable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ItemCard;
