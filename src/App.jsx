import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";
import TasksContext from "./context/TasksContext.jsx";
import { useContext, useEffect } from "react";
import Background from "./image/background2.webp";

function App() {
  const { tasks, fetchTasks } = useContext(TasksContext);

  return (
    <div className=" min-h-screen bg-amber-700">
      <div className=" relative min-h-[220px] h-[40vh] w-full z-0 bg-[url(./image/background2.webp)] bg-cover bg-center bg-no-repeat">
        <img
          src={Background}
          alt="Mountain background image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-center">
        <div className=" z-10 w-1/2 -mt-37">
          <Header />
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
