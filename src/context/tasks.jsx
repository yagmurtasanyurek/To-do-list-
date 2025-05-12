import { createContext, useEffect, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const fetchTasks = () => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      try {
        setTasks(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse tasks from localStorage", err);
        setTasks([]);
      }
    } else {
      setTasks([]);
    }
  };

  const createTask = (taskName) => {
    const newTask = { name: taskName, id: Math.round(Math.random() * 9999) };
    setTasks((prev) => {
      const updated = [newTask, ...prev];
      // it was working without this:
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      const updated = prev.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
  };

  const valueToShare = {
    tasks,
    createTask,
    deleteTask,
  };
  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
