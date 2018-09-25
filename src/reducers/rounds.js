import { mapReducers } from 'redux-map-reducers';

import * as actionTypes from '../constants/actionTypes';

const initialState = {
  rounds: []
};

const reducerMap = {
  [actionTypes.ADD_ROUND]: addRound,
  [actionTypes.REMOVE_LAST_ROUND]: removeLastRound,
  [actionTypes.CLEAR_ROUNDS]: clearRounds
};

function addRound(state, action) {
  return {
    ...state,
    rounds: [...state.rounds, action.round]
  }
}

function removeLastRound(state) {
  return {
    ...state,
    rounds: state.rounds.filter((_, i) => i !== (state.rounds.length - 1))
  }
}

function clearRounds(state) {
  return {
    ...state,
    rounds: []
  }
}

export default mapReducers(reducerMap, initialState);
