import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import TasksContext from "../context/tasks.jsx";
import { useContext } from "react";

function ShowTask({ task }) {
  const { deleteTask } = useContext(TasksContext);
  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <input type="checkbox"></input>
      {task.name}
      <button onClick={handleDeleteClick}>
        <MdDelete />
      </button>
    </div>
  );
}
export default ShowTask;
