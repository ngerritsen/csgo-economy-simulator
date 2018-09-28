import { mapReducers } from 'redux-map-reducers';

import * as actionTypes from '../constants/actionTypes';
import { T } from '../constants/sides';

const reducerMap = {
  [actionTypes.SELECT_SIDE]: selectSide
};

function selectSide(_, action) {
  return action.side;
}

export default mapReducers(reducerMap, T);
