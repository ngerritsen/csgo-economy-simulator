import { combineReducers } from 'redux';

import buyReducer from './buy';
import roundsReducer from './rounds';
import sideReducer from './side';

export default combineReducers({
  buy: buyReducer,
  rounds: roundsReducer,
  side: sideReducer
});
