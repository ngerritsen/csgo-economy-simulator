import { mapReducers } from 'redux-map-reducers';

import { PISTOL } from '../constants/itemTypes';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  selectedItems: [],
  itemType: PISTOL
};

const reducerMap = {
  [actionTypes.DESELECT_ITEM]: deselectItem,
  [actionTypes.SELECT_ITEM_TYPE]: selectItemType,
  [actionTypes.SELECT_ITEM]: selectItem
};

function deselectItem(state, action) {
  const index = state.selectedItems.indexOf(action.id);

  return {
    ...state,
    selectedItems: state.selectedItems.filter((_, i) => i !== index)
  };
}

function selectItemType(state, action) {
  return {
    ...state,
    itemType: action.itemType
  };
}

function selectItem(state, action) {
  return {
    ...state,
    selectedItems: [...state.selectedItems, action.id]
  };
}

export default mapReducers(reducerMap, initialState);
