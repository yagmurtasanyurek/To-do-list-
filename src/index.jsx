import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TasksContext from "./context/TasksContext.jsx";
import { TasksProvider } from "./context/TasksContext.jsx";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <TasksProvider>
    <App />
  </TasksProvider>
);
