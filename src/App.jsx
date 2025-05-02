import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";
import TasksContext from "./context/tasks.jsx";
import { useContext, useEffect, useState } from "react";

function App() {
  const { tasks, createTask } = useContext(TasksContext);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <Header />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
