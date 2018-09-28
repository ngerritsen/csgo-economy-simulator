const CURRENCY_SYMBOL = '$';

export function formatMoney(amount) {
  if (amount % 1 !== 0) {
    return CURRENCY_SYMBOL + amount.toFixed(2);
  }

  return CURRENCY_SYMBOL + amount.toFixed() + ',-';
}
