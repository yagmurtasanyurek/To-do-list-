import TaskDelete from "./TaskDelete.jsx";
import Checkbox from "./Checkbox.jsx";

function ShowTask({ task }) {
  return (
    <li
      className={`flex justify-between border-b border-gray-300 p-4 
      ${task.isDone ? "line-through text-gray-400 " : ""} `}
    >
      <div className=" flex items-center justify-between gap-3">
        <Checkbox task={task} />
        <p
          className={`text-base text-sky-950 font-extrabold ${
            task.isDone ? "font-semibold" : ""
          } `}
        >
          {task.name}
        </p>
      </div>

      <TaskDelete task={task} />
    </li>
  );
}
export default ShowTask;
