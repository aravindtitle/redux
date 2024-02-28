import React from "react";
import { createStore } from "redux"; // Import createStore from Redux
import { Provider } from "react-redux"; // Import Provider from react-redux
import Counter from "./components/Counter";

// Define your reducer function
const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 5 };
  }
  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  }
  return state;
};

// Create your Redux store
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your root component with Provider and pass your Redux store */}
      <Counter /> {/* Your Counter component */}
    </Provider>
  );
};

export default App;
