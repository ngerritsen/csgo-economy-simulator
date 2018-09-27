import React from 'react';
import PropTypes from 'prop-types';

import { Item as ItemPropType } from '../propTypes';
import itemTypes from '../constants/itemTypes';
import sides from '../constants/sides';

import ItemCard from './ItemCard';

const ItemSelector = ({
  deselectItem,
  selectableItems,
  selectedItems,
  selectedItemType,
  selectItem,
  selectItemType,
  selectSide,
  side,
  submit
}) => (
  <div>
    <div className="tabs is-toggle is-small is-fullwidth">
      <ul>
        {sides.map(({ id, name }) => (
          <li className={side === id ? 'is-active' : ''} key={id}>
            <a onClick={() => selectSide(id)}>{name}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className="tabs is-boxed is-small is-fullwidth">
      <ul>
        {itemTypes.map(({ type, name }) => (
          <li className={type === selectedItemType ? 'is-active' : ''} key={type}>
            <a onClick={() => selectItemType(type)}>{name}</a>
          </li>
        ))}
      </ul>
    </div>

    <div className="columns is-multiline is-variable is-2">
      {selectableItems.map(item => (
        <div className="column is-3" key={item.id}>
          <ItemCard item={item} onClick={() => selectItem(item.id)} />
        </div>
      ))}
    </div>
    {selectedItems.length > 0 && (
      <div className="tags">
        {selectedItems.map(({ name, id }, i) => (
          <span className="tag is-medium" key={i}>
            {name}
            <button className="delete is-small" onClick={() => deselectItem(id)}>
              X
            </button>
          </span>
        ))}
      </div>
    )}
    <div className="field is-grouped">
      <p className="control">
        <button onClick={() => submit(true)} className="button is-success">
          Win
        </button>
      </p>
      <p className="control">
        <button onClick={() => submit(false)} className="button is-danger">
          Lose
        </button>
      </p>
    </div>
  </div>
);

ItemSelector.propTypes = {
  deselectItem: PropTypes.func.isRequired,
  selectableItems: PropTypes.arrayOf(ItemPropType).isRequired,
  selectedItems: PropTypes.arrayOf(ItemPropType).isRequired,
  selectedItemType: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired,
  selectItemType: PropTypes.func.isRequired,
  selectSide: PropTypes.func.isRequired,
  side: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
};

export default ItemSelector;
