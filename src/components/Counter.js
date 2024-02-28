import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, increment2, decrement2 } from "./actions"; // Import both action creators

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementCounterHandler = () => {
    dispatch(increment()); // Dispatch the increment action
  };

  const decrementCounterHandler = () => {
    dispatch(decrement()); // Dispatch the decrement action
  };
  const incrementCounter2Handler = () => {
    dispatch(increment2()); // Dispatch the increment action
  };

  const decrementCounter2Handler = () => {
    dispatch(decrement2()); // Dispatch the decrement action
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={incrementCounter2Handler}>Increment Counter(2)</button>
      <button onClick={decrementCounterHandler}>Decrement Counter</button>
      <button onClick={decrementCounter2Handler}>Decrement Counter(2)</button>
    </main>
  );
};

export default Counter;
