import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Store/Store";
import { increment, decrement } from "./actions";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggleHandler());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementCounterHandler}>IncrementBy5</button>
      <button onClick={increaseCounterHandler}>increase</button>
      <button onClick={decrementCounterHandler}>Decremenenby5</button>
      <br></br>
      <br></br>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
