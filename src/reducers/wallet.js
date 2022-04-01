import { ACTION_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [0],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_WALLET:
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  default:
    return state;
  }
};

export default wallet;
