import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementCounterHandler = () => {
    dispatch(increment());
  };

  const decrementCounterHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementCounterHandler}>IncrementBy5</button>

      <button onClick={decrementCounterHandler}>Decremenenby5</button>
    </main>
  );
};

export default Counter;
