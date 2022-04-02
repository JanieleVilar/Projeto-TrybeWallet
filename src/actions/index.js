export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET = 'ACTION_WALLET';
export const ACTION_REQUEST = 'ACTION_REQUEST';

export const actionUser = (email) => ({
  type: ACTION_USER,
  email,
});

export const actionRequest = () => ({
  type: ACTION_REQUEST,
});

export const actionWallet = (currencies) => ({
  type: ACTION_WALLET,
  currencies,
});

export const fetchAction = () => async (dispatch) => {
  dispatch(actionRequest());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((currencies) => {
      const currenciesKeys = Object.keys(currencies);
      const filterKeys = currenciesKeys.filter((key) => key !== 'USDT');
      dispatch(actionWallet(filterKeys));
    });
};
