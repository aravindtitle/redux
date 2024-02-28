import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions"; // Import both action creators

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

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementCounterHandler}>Increment Counter</button>
      <button onClick={decrementCounterHandler}>Decrement Counter</button>
    </main>
  );
};

export default Counter;
