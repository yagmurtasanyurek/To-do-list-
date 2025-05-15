import TaskDelete from "./TaskDelete.jsx";
import Checkbox from "./Checkbox.jsx";

function ShowTask({ task }) {
  return (
    <li>
      <Checkbox task={task} />
      {task.name}
      <TaskDelete task={task} />
    </li>
  );
}
export default ShowTask;
