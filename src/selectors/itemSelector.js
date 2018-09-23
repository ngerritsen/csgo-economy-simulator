import items from '../constants/items';

export function getSelectableItems(state) {
  return items.filter(i => (
    i.sides.includes(state.itemSelector.side) &&
    i.type === state.itemSelector.itemType
  ));
}

export function getSelectedItems(state) {
  return state.itemSelector.selectedItems.map(si => items.find(i => i.id === si));
}
