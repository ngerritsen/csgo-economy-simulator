import PropTypes from 'prop-types';

export const Item = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  killReward: PropTypes.number,
  cost: PropTypes.number,
  type: PropTypes.string.isRequired,
  sides: PropTypes.arrayOf(PropTypes.string).isRequired
});
