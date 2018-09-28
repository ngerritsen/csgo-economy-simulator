import { connect } from 'react-redux';
import { getCurrentSaldo } from '../selectors/money';
import { getSelectedItems } from '../selectors/buy';
import { deselectItem } from '../actions';

import BuyStatus from '../components/BuyStatus';

function mapStateToProps(state) {
  return {
    saldo: getCurrentSaldo(state),
    selectedItems: getSelectedItems(state)
  };
}

export default connect(
  mapStateToProps,
  { deselectItem }
)(BuyStatus);
