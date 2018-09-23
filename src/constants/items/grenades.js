import { GRENADE } from '../itemTypes';
import { CT, T } from '../sides';

export default [
  {
    id: 'molotov',
    name: 'Molotov',
    type: GRENADE,
    sides: [T],
    cost: 400,
    killReward: 300
  },
  {
    id: 'incendiary-grenade',
    name: 'Incendiary Grenade',
    type: GRENADE,
    sides: [CT],
    cost: 600,
    killReward: 300
  },
  {
    id: 'decoy-grenade',
    name: 'Decoy Grenade',
    type: GRENADE,
    sides: [T, CT],
    cost: 50,
    killReward: 300
  },
  {
    id: 'flashbang',
    name: 'Flashbang',
    type: GRENADE,
    sides: [T, CT],
    cost: 200,
    killReward: 300
  },
  {
    id: 'smoke-grenade',
    name: 'Smoke grenade',
    type: GRENADE,
    sides: [T, CT],
    cost: 300,
    killReward: 300
  }
];
