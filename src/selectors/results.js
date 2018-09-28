import { getSide } from './side';
import results from '../constants/results';

export function getPossibleResults(state) {
  return results.filter(r => r.sides.includes(getSide(state)));
}
