import React from 'react';
import PropTypes from 'prop-types';
import { Margin } from 'styled-components-spacing';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import { Item as ItemPropType } from '../propTypes';
import itemTypes from '../constants/itemTypes';
import sides from '../constants/sides';

import Item from './Item';

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
    <Margin>
      <Grid columns={2}>
        {sides.map(({ id, name }) => (
          <Cell key={id}>
            <SelectableBox onClick={() => selectSide(id)} selected={side === id}>
              {name}
            </SelectableBox>
          </Cell>
        ))}
      </Grid>
    </Margin>
    <Margin top={2}>
      <Grid columns={6}>
        {itemTypes.map(({ type, name }) => (
          <Cell key={type}>
            <SelectableBox onClick={() => selectItemType(type)} selected={type === selectedItemType}>
              {name}
            </SelectableBox>
          </Cell>
        ))}
      </Grid>
    </Margin>
    <Margin top={2}>
      <Grid columns={4}>
        {selectableItems.map(item  => (
          <Cell key={item.id}>
            <SelectableBox onClick={() => selectItem(item.id)}>
              <Item item={item}/>
            </SelectableBox>
          </Cell>
        ))}
      </Grid>
    </Margin>
    {
      selectedItems.length > 0 && 
      <Margin top={2}>
        <h2>Selected items</h2>
        <ul>
        {selectedItems.map(({ name, id }, i) => (
          <li key={i}>
            <span>{name} &nbsp;</span>
            <button onClick={() => deselectItem(id)}>X</button>
          </li>
        ))}
        </ul>
      </Margin>
    }
    <Margin top={2}>
      <Grid columns={2}>
        <Cell>
          <ConfirmationButton onClick={() => submit(true)} type="success">Win</ConfirmationButton>
        </Cell>
        <Cell>
          <ConfirmationButton onClick={() => submit(false)} type="danger">Lose</ConfirmationButton>
        </Cell>
      </Grid>
    </Margin>
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
}

const ConfirmationButton = styled.button`
  background: ${p => p.theme.colors[p.type]};
  width: 100%;
  border-radius: 3px;
  border: 0;
  padding: ${p => p.theme.spacing[2]};
  color: ${p => p.theme.colors.bg};
`;

const SelectableBox = styled.button`
  background: transparent;
  width: 100%;
  color: ${p => p.theme.colors.fg};
  padding: ${p => p.theme.spacing[2]};
  border: 1px solid ${p => p.theme.colors[p.selected ? 'primary' : 'border']};
  border-radius: 3px;
  height: 100%;

  &:hover {
    border-color: ${p => p.theme.colors[p.selected ? 'primary' : 'borderHover']};
  }
`;

export default ItemSelector;
