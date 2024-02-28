// actions.js

// Action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT2 = "INCREMENT2";
export const DECREMENT2 = "DECREMENT2";

// Action creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const increment2 = () => {
  return {
    type: INCREMENT2,
  };
};
export const decrement2 = () => {
  return {
    type: DECREMENT2,
  };
};
