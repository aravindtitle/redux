import React from "react";

import Counter from "./components/Counter";

// Define your reducer function

const App = () => {
  return (
    <>
      {" "}
      {/* Wrap your root component with Provider and pass your Redux store */}
      <Counter /> {/* Your Counter component */}
    </>
  );
};

export default App;
