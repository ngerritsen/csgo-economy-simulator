import PropTypes from 'prop-types';

export const Item = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  killReward: PropTypes.number,
  cost: PropTypes.number,
  type: PropTypes.string.isRequired,
  sides: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const Result = PropTypes.shape({
  name: PropTypes.string.isRequired,
  reward: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  positive: PropTypes.bool.isRequired,
  sides: PropTypes.arrayOf(PropTypes.string).isRequired
});
