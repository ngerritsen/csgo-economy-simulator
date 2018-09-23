import { mapReducers } from 'redux-map-reducers';

import { T } from '../constants/sides';
import * as actionTypes from '../constants/actionTypes';

const initialState = {
  selectedItems: [],
  itemType: '',
  side: T
};

const reducerMap = {
  [actionTypes.DESELECT_ITEM]: deselectItem,
  [actionTypes.SELECT_ITEM_TYPE]: selectItemType,
  [actionTypes.SELECT_ITEM]: selectItem,
  [actionTypes.SELECT_SIDE]: selectSide
};

function deselectItem(state, action) {
  const index = state.selectedItems.indexOf(action.id);

  return {
    ...state,
    selectedItems: state.selectedItems.filter((_, i) => i !== index)
  }
}

function selectItemType(state, action) {
  return {
    ...state,
    itemType: action.itemType
  }
}

function selectItem(state, action) {
  return {
    ...state,
    selectedItems: [...state.selectedItems, action.id]
  }
}

function selectSide(state, action) {
  return {
    ...state,
    side: action.side
  }
}

export default mapReducers(reducerMap, initialState);
