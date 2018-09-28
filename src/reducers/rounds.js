import { mapReducers } from 'redux-map-reducers';

import * as actionTypes from '../constants/actionTypes';

const reducerMap = {
  [actionTypes.ADD_ROUND]: addRound,
  [actionTypes.REMOVE_LAST_ROUND]: removeLastRound,
  [actionTypes.CLEAR_ROUNDS]: clearRounds
};

function addRound(state, action) {
  return [...state, action.round];
}

function removeLastRound(state) {
  return state.slice(-1);
}

function clearRounds() {
  return [];
}

export default mapReducers(reducerMap, []);
