import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function ShowTask({ task, onDeleteTask }) {
  const handleDeleteClick = () => {
    onDeleteTask(task.id);
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
