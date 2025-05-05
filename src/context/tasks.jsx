import axios from "axios";
import { createContext, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3001/tasks");
    const reversed = [...response.data].reverse();
    setTasks(reversed);
  };

  // for taking task from TaskInput, and update tasks.
  const createTask = async (taskName) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      name: taskName,
    });

    const newTask = response.data;

    //functional state updater, cause state depends on previous one.
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    //functional state updater, cause state depends on previous one.
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const valueToShare = {
    tasks,
    createTask,
    deleteTask,
    fetchTasks,
  };
  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
