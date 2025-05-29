import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";
import TasksContext from "./context/TasksContext.jsx";
import { useContext, useEffect } from "react";
import MountainImage from "./image/mountain2.jpg";

function App() {
  const { tasks, fetchTasks } = useContext(TasksContext);

  return (
    <div className=" min-h-screen bg-neutral-200">
      <div className=" relative h-[40vh] w-full z-0 bg-[url(./image/mountain2.jpg)] bg-cover bg-center bg-no-repeat">
        -
      </div>
      {/*   <div className="flex justify-center"> */}
      <div
        className="absolute  left-1/2 top-1/2  translate-x-[-50%] translate-y-[-90%] z-10 
           w-2/5 "
      >
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    </div>
    /*    </div> */
  );
}

export default App;
