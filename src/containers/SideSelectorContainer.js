import { connect } from 'react-redux';
import { selectSide } from '../actions';

import SideSelector from '../components/SideSelector';
import { getSide } from '../selectors/side';

function mapStateToProps(state) {
  return { selectedSide: getSide(state) };
}

export default connect(
  mapStateToProps,
  { selectSide }
)(SideSelector);
