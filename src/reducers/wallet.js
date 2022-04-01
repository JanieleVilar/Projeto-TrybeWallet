import { ACTION_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_WALLET:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default wallet;
