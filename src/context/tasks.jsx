import { createContext, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
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
