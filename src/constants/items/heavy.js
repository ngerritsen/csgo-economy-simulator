import { HEAVY } from '../itemTypes';
import { CT, T } from '../sides';

export default [
  {
    id: 'sawed-off',
    name: 'Sawed-Off',
    type: HEAVY,
    sides: [T],
    cost: 1200,
    killReward: 900
  },
  {
    id: 'mag-7',
    name: 'MAG-7',
    type: HEAVY,
    sides: [CT],
    cost: 1800,
    killReward: 900
  },
  {
    id: 'nova',
    name: 'Nova',
    type: HEAVY,
    sides: [CT, T],
    cost: 1200,
    killReward: 900
  },
  {
    id: 'xm1014',
    name: 'XM1014',
    type: HEAVY,
    sides: [CT, T],
    cost: 2000,
    killReward: 900
  },
  {
    id: 'm249',
    name: 'M249',
    type: HEAVY,
    sides: [CT, T],
    cost: 5200,
    killReward: 300
  },
  {
    id: 'negev',
    name: 'Negev',
    type: HEAVY,
    sides: [CT, T],
    cost: 5700,
    killReward: 300
  }
];
