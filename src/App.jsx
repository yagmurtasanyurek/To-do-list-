import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // for taking task from TaskInput, and update tasks.
  const createTask = (taskName) => {
    const newTask = {
      name: taskName,
      isDone: false,
      id: Math.round(Math.random() * 9999),
    };

    //functional state updater, cause state depends on previous one.
    setTasks((prev) => [newTask, ...prev]);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <Header />
      <TaskInput onAddTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
