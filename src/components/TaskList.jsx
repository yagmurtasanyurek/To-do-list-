import TasksContext from "../context/TasksContext.jsx";
import ShowTask from "./ShowTask";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  const renderedTasks = tasks.map((task) => {
    return <ShowTask task={task} key={task.id} />;
  });
  return (
    <div className="bg-amber-50  rounded-xl overflow-hidden">
      <ul>{renderedTasks}</ul>
    </div>
  );
}
export default TaskList;
