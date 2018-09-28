import React from 'react';
import PropTypes from 'prop-types';

import { Item } from '../propTypes';
import { formatMoney } from '../helpers/formatters';
import ResultSelectorContainer from '../containers/ResultSelectorContainer';

const BuyStatus = ({ deselectItem, saldo, selectedItems }) => (
  <div className="box">
    <p className="title is-5">{formatMoney(saldo)}</p>
    <p className="subtitle is-6">Round 1</p>

    {selectedItems.length > 0 && (
      <div className="tags">
        {selectedItems.map(({ name, id }, i) => (
          <span className="tag is-medium" key={i}>
            {name}
            <button
              className="delete is-small"
              onClick={() => deselectItem(id)}
            />
          </span>
        ))}
      </div>
    )}

    <ResultSelectorContainer />
  </div>
);

BuyStatus.propTypes = {
  deselectItem: PropTypes.func.isRequired,
  saldo: PropTypes.number.isRequired,
  selectedItems: PropTypes.arrayOf(Item).isRequired
};

export default BuyStatus;
