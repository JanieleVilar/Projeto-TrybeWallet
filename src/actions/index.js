export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET = 'ACTION_WALLET';

export const actionUser = (email) => ({
  type: ACTION_USER,
  email,
});

export const actionWallet = (currencies, expenses) => ({
  type: ACTION_WALLET,
  currencies,
  expenses,
});
