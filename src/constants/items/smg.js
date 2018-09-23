import { SMG } from '../itemTypes';
import { CT, T } from '../sides';

export default [
  {
    id: 'mac-10',
    name: 'MAC-10',
    type: SMG,
    sides: [T],
    cost: 1050,
    killReward: 600
  },
  {
    id: 'mp9',
    name: 'MP9',
    type: SMG,
    sides: [CT],
    cost: 1250,
    killReward: 600
  },
  {
    id: 'mp7',
    name: 'MP7',
    type: SMG,
    sides: [T, CT],
    cost: 1500,
    killReward: 600
  },
  {
    id: 'ump-45',
    name: 'UMP-45',
    type: SMG,
    sides: [T, CT],
    cost: 1200,
    killReward: 600
  },
  {
    id: 'pp-bizon',
    name: 'PP-Bizon',
    type: SMG,
    sides: [T, CT],
    cost: 1400,
    killReward: 600
  },
  {
    id: 'p90',
    name: 'P90',
    type: SMG,
    sides: [T, CT],
    cost: 2350,
    killReward: 300
  }
];
