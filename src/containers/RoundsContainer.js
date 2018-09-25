import { connect } from 'react-redux';
import { removeLastRound, clearRounds } from '../actions';

import Rounds from '../components/Rounds';

function mapStateToProps(state) {
  return {
    rounds: state.rounds.rounds
  };
}

export default connect(
  mapStateToProps,
  { removeLastRound, clearRounds }
)(Rounds);
