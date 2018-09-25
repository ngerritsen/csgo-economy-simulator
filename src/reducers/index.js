import { combineReducers } from 'redux';

import itemSelectorReducer from './itemSelector';
import roundsReducer from './rounds';

export default combineReducers({
  itemSelector: itemSelectorReducer,
  rounds: roundsReducer
});
