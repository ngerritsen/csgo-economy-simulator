import { START_MONEY } from '../constants/money';
import { getSelectedItems } from './buy';

export function getCurrentSaldo(state) {
  return getSelectedItems(state).reduce(
    (saldo, item) => saldo - item.cost,
    START_MONEY
  );
}
