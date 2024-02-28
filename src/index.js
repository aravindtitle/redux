import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./store"; // Assuming your Redux store is configured in a file called store.js

import App from "./App"; // Assuming App is your root component

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Provide the store to the Provider */}
    <App />
  </Provider>,
  document.getElementById("root")
);
