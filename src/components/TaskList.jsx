import TasksContext from "../context/tasks.jsx";
import ShowTask from "./ShowTask";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  const renderedTasks = tasks.map((task, index) => {
    return <ShowTask task={task} key={task.id} />;
  });
  return <div>{renderedTasks}</div>;
}
export default TaskList;
