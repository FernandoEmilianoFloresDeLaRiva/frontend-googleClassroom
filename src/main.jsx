import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import IndexRouter from "./router/IndexRoute/IndexRouter.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/indexStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexRouter />
    </Provider>
  </React.StrictMode>
);
