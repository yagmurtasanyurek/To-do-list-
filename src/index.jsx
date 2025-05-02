import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TasksContext from "./context/tasks.jsx";
import { Provider } from "./context/tasks.jsx";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
