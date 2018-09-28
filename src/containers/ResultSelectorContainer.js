import { connect } from 'react-redux';

import { getPossibleResults } from '../selectors/results';
import { addRound } from '../actions';
import ResultSelector from '../components/ResultSelector';

function mapStateToProps(state) {
  return {
    results: getPossibleResults(state),
    submit: () => {}
  };
}

export default connect(
  mapStateToProps,
  { addRound }
)(ResultSelector);
