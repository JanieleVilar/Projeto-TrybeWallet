import {
  ACTION_WALLET_CURR,
  ACTION_WALLET_EXP,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  somAsk: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_WALLET_CURR:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ACTION_WALLET_EXP: {
    const { value, exchangeRates, currency } = action.expenses;
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      somAsk: state.somAsk + value * exchangeRates[currency].ask,
    };
  }
  default:
    return state;
  }
};

export default wallet;
