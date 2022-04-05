export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET_CURR = 'ACTION_WALLET_CURR';
export const ACTION_WALLET_EXP = 'ACTION_WALLET_EXP';
export const ACTION_REQUEST = 'ACTION_REQUEST';
export const GET_ASK_ACTION = 'GET_AKS_ACTION';

export const actionUser = (email) => ({
  type: ACTION_USER,
  email,
});

export const actionRequest = () => ({
  type: ACTION_REQUEST,
});

export const actionWalletCurr = (currencies) => ({
  type: ACTION_WALLET_CURR,
  currencies,
});

export const actionWalletExp = (expenses) => ({
  type: ACTION_WALLET_EXP,
  expenses,
});

export const getAskAction = (ask) => ({
  type: GET_ASK_ACTION,
  ask,
});

const url = 'https://economia.awesomeapi.com.br/json/all';

export const fetchAction = () => async (dispatch) => {
  dispatch(actionRequest());
  return fetch(url)
    .then((response) => response.json())
    .then((currencies) => {
      const currenciesKeys = Object.keys(currencies);
      const filterKeys = currenciesKeys.filter((key) => key !== 'USDT');
      dispatch(actionWalletCurr(filterKeys));
    });
};

export const fetchActionExp = (formData) => async (dispatch) => {
  dispatch(actionRequest());
  return fetch(url)
    .then((response) => response.json())
    .then((exchangeRates) => dispatch(actionWalletExp({ ...formData, exchangeRates })));
};
