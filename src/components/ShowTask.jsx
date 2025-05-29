import TaskDelete from "./TaskDelete.jsx";
import Checkbox from "./Checkbox.jsx";

function ShowTask({ task }) {
  return (
    <li className="flex justify-between border-b border-gray-300 p-4">
      <div className=" flex justify-between gap-3">
        <Checkbox task={task} />
        {task.name}
      </div>

      <TaskDelete task={task} />
    </li>
  );
}
export default ShowTask;
