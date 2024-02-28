import { configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 5 };
  }

  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 5 };
  }

  return state;
};

// Create your Redux store
const store = configureStore({
  reducer: reducer,
});

export default store;
