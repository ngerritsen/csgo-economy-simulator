import { CT, T } from './sides';

export const WIN = 'WIN';
export const WIN_DETONATION = 'WIN_DETONATION';
export const WIN_DEFUSE = 'WIN_DEFUSE';
export const LOSE = 'LOSE';
export const LOSE_PLANT = 'LOSE_PLANT';

export const SMG_KILL = 'SMG_KILL';
export const SHOTGUN_KILL = 'SHOTGUN_KILL';
export const AWP_CZ75_KILL = 'AWP_CZ75_KILL';
export const OTHER_KILL = 'OTHER_KILL';
export const KNIFE_KILL = 'KNIFE_KILL';
export const TEAM_KILL = 'TEAM_KILL';
export const BOMB_PLANT = 'BOMB_PLANT';
export const BOMB_DEFUSE = 'BOMB_DEFUSE';

export default [
  {
    type: WIN,
    name: 'Win',
    teamReward: 3250,
    sides: [T, CT]
  },
  {
    type: WIN_DETONATION,
    name: 'Win + detonation',
    teamReward: 3500,
    sides: [T]
  },
  {
    type: WIN_DEFUSE,
    name: 'Win + defusal',
    teamReward: 3500,
    sides: [CT]
  },
  {
    type: LOSE,
    name: 'Lose',
    teamReward: 1400,
    sides: [T, CT]
  },
  {
    type: LOSE_PLANT,
    name: 'Lose + plant',
    teamReward: 2200,
    sides: [T]
  }
];

export const individualEvents = [
  {
    type: OTHER_KILL,
    reward: 300,
    name: 'Kill'
  },
  {
    type: SMG_KILL,
    reward: 600,
    name: 'SMG kill (no P90)'
  },
  {
    type: SHOTGUN_KILL,
    reward: 900,
    name: 'Shotgun kill'
  },
  {
    type: SHOTGUN_KILL,
    reward: 900,
    name: 'Knife kill'
  },
  {
    type: AWP_CZ75_KILL,
    reward: 100,
    name: 'AWP/CZ75 kill'
  },
  {
    type: KNIFE_KILL,
    reward: 1500,
    name: 'Knife kill'
  },
  {
    type: TEAM_KILL,
    reward: -3300,
    name: 'Team kill'
  },
  {
    type: TEAM_KILL,
    reward: -3300,
    name: 'Team kill'
  },
  {
    type: BOMB_PLANT,
    reward: 300,
    name: 'Bomb plant'
  },
  {
    type: BOMB_DEFUSE,
    reward: 300,
    name: 'Bomb defuse'
  }
]
