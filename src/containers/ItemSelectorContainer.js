import { getSelectableItems, getSelectedItems } from '../selectors/itemSelector';
import { connect } from 'react-redux';
import { selectItem, selectItemType, deselectItem, selectSide, addRound } from '../actions';

import ItemSelector from '../components/ItemSelector';

function mapStateToProps(state) {
  return {
    selectableItems: getSelectableItems(state),
    selectedItems: getSelectedItems(state),
    selectedItemType: state.itemSelector.itemType,
    side: state.itemSelector.side,
    _selectedItems: state.itemSelector.selectedItems
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  function submit(result) {
    dispatchProps.addRound(
      result,
      stateProps._selectedItems,
      []
    )
  }

  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    submit
  }
}

export default connect(
  mapStateToProps,
  { selectSide, selectItem, selectItemType, deselectItem, addRound },
  mergeProps
)(ItemSelector);
