import { combineReducers } from 'redux';

import itemSelectorReducer from './itemSelector';

export default combineReducers({
  itemSelector: itemSelectorReducer
});
