import TaskDelete from "./TaskDelete.jsx";

function ShowTask({ task }) {
  return (
    <li>
      <input type="checkbox"></input>
      {task.name}
      <TaskDelete task={task} />
    </li>
  );
}
export default ShowTask;
