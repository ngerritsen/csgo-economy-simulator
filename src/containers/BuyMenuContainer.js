import { connect } from 'react-redux';

import { selectItem, selectItemType, selectSide, addRound } from '../actions';
import { getSelectableItems, getSelectedItemType } from '../selectors/buy';
import BuyMenu from '../components/BuyMenu';
import { getCurrentSaldo } from '../selectors/money';

function mapStateToProps(state) {
  return {
    selectableItems: getSelectableItems(state),
    saldo: getCurrentSaldo(state),
    selectedItemType: getSelectedItemType(state)
  };
}

export default connect(
  mapStateToProps,
  { selectSide, selectItem, selectItemType, addRound }
)(BuyMenu);
