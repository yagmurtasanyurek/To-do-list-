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

  const deleteTask = (idToDelete) => {
    //functional state updater, cause state depends on previous one.
    setTasks((prev) => prev.filter((task) => task.id !== idToDelete));
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div>
      <Header />
      <TaskInput onAddTask={createTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
