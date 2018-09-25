import * as actionTypes from './constants/actionTypes';

export const deselectItem = id => ({ type: actionTypes.DESELECT_ITEM, id });
export const selectItem = id => ({ type: actionTypes.SELECT_ITEM, id });
export const selectItemType = itemType => ({ type: actionTypes.SELECT_ITEM_TYPE, itemType });
export const selectSide = side => ({ type: actionTypes.SELECT_SIDE, side });

export const addRound = (result, items, events) => ({
  type: actionTypes.ADD_ROUND,
  round: {
    items,
    result,
    events
  }
});
export const removeLastRound = () => ({ type: actionTypes.REMOVE_LAST_ROUND });
export const clearRounds = () => ({ type: actionTypes.CLEAR_ROUNDS });
