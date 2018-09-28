import React from 'react';
import PropTypes from 'prop-types';

import itemTypes from '../constants/itemTypes';
import ItemCard from './ItemCard';

const BuyMenu = ({
  selectableItems,
  selectedItemType,
  selectItem,
  selectItemType,
  saldo
}) => (
  <div>
    <div className="tabs is-boxed is-fullwidth">
      <ul>
        {itemTypes.map(({ type, name }) => (
          <li
            className={type === selectedItemType ? 'is-active' : ''}
            key={type}
          >
            <a onClick={() => selectItemType(type)}>{name}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className="columns is-multiline is-variable is-2">
      {selectableItems.map(item => (
        <div className="column is-3" key={item.id}>
          <ItemCard
            item={item}
            isAffordable={saldo >= item.cost}
            onClick={() => selectItem(item.id)}
          />
        </div>
      ))}
    </div>
  </div>
);

BuyMenu.propTypes = {
  saldo: PropTypes.number.isRequired,
  selectedItemType: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
  selectItemType: PropTypes.func.isRequired,
  selectSide: PropTypes.func.isRequired
};

export default BuyMenu;
