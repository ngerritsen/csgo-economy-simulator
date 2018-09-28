import items from '../constants/items';
import { getSide } from './side';

export function getSelectableItems(state) {
  return items.filter(
    i =>
      i.sides.includes(getSide(state)) && i.type === getSelectedItemType(state)
  );
}

export function getSelectedItems(state) {
  return getSelectedItemsIds(state).map(si => items.find(i => i.id === si));
}

export function getSelectedItemType(state) {
  return state.buy.itemType;
}

export function getSelectedItemsIds(state) {
  return state.buy.selectedItems;
}
