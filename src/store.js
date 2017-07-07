import { createStore } from "redux";

const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

export const deposit = amount => ({ type: DEPOSIT, amount });

export const withdraw = amount => ({ type: WITHDRAW, amount });

const initialState = {
  balance: 100
};

const bankStore = createStore((state = initialState, action) => {
  console.log("ACTION IN", action);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case DEPOSIT:
      newState.balance += action.amount;
      break;
    case WITHDRAW:
      newState.balance -= action.amount;
      break;
    default:
      return state;
  }
  return newState;
});

export default bankStore;
