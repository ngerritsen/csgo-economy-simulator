import React from 'react';
import PropTypes from 'prop-types';

import { Item } from '../propTypes';

const ItemCard = ({ item: { name, cost, id }, onClick }) => (
  <div onClick={onClick} className="card" style={{ height: '100%', cursor: 'pointer' }}>
    <div className="card-image">
      <figure
        style={{
          height: '6rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          style={{ maxHeight: '6rem', width: 'auto' }}
          src={`/img/weapon-thumbnails/${id}.png`}
          alt={name}
        />
      </figure>
    </div>
    <div className="card-content">
      <p className="title is-6">{name}</p>
      <p className="subtitle is-7">${cost + ',-'}</p>
    </div>
  </div>
);

ItemCard.propTypes = {
  item: Item,
  onClick: PropTypes.func.isRequired
};

export default ItemCard;
