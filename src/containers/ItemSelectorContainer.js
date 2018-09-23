import { getSelectableItems, getSelectedItems } from '../selectors/itemSelector';
import { connect } from 'react-redux';
import { selectItem, selectItemType, deselectItem, selectSide } from '../actions';

import ItemSelector from '../components/ItemSelector';

function mapStateToProps(state) {
  return {
    selectableItems: getSelectableItems(state),
    selectedItems: getSelectedItems(state),
    selectedItemType: state.itemSelector.itemType,
    side: state.itemSelector.side
  };
}

export default connect(
  mapStateToProps,
  { selectSide, selectItem, selectItemType, deselectItem }
)(ItemSelector);
