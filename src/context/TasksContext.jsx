import { createContext, useState } from "react";

const TasksContext = createContext(null);

function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch (err) {
      console.error("Failed to parse tasks from localStorage", err);
      return [];
    }
  });

  const createTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: Math.round(Math.random() * 9999),
      isDone: false,
    };
    const updated = [newTask, ...tasks];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const checkTasks = (id, checked) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: checked } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
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
    checkTasks,
  };
  return (
    <TasksContext.Provider value={valueToShare}>
      {children}
    </TasksContext.Provider>
  );
}

export { TasksProvider };
export default TasksContext;
