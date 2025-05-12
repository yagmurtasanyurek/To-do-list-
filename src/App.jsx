import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";
import TasksContext from "./context/tasks.jsx";
import { useContext, useEffect } from "react";

function App() {
  const { tasks, fetchTasks } = useContext(TasksContext);

  return (
    <div>
      <Header />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
