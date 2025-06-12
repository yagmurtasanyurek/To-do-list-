import TaskDelete from "./TaskDelete.jsx";
import Checkbox from "./Checkbox.jsx";

function ShowTask({ task }) {
  return (
    <li className="flex justify-between border-b border-gray-300 p-4 ">
      <div
        className={`flex items-center justify-between gap-3 max-w-[90%] ${
          task.isDone ? "line-through text-green-400 " : ""
        }`}
      >
        <Checkbox task={task} />
        <p className={`text-base text-sky-950 font-extrabold font-nuni  `}>
          {task.name}
        </p>
      </div>

      <TaskDelete task={task} />
    </li>
  );
}
export default ShowTask;
