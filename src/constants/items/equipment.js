import { EQUIPMENT } from '../itemTypes';
import { CT, T } from '../sides';

export default [
  {
    id: 'kevlar-vest',
    name: 'Kevlar vest',
    type: EQUIPMENT,
    sides: [T, CT],
    cost: 650
  },
  {
    id: 'kevlar-helmet',
    name: 'Kevlar + Helmet',
    type: EQUIPMENT,
    sides: [T, CT],
    cost: 1000
  },
  {
    id: 'zeus-x27',
    name: 'Zeus x27',
    type: EQUIPMENT,
    sides: [T, CT],
    cost: 200,
    killReward: 0
  },
  {
    id: 'defusal-kit',
    name: 'Defusal Kit',
    type: EQUIPMENT,
    sides: [CT],
    cost: 400
  }
];
