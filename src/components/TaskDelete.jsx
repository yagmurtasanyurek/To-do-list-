import TasksContext from "../context/TasksContext";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";

function TaskDelete({ task }) {
  const { deleteTask } = useContext(TasksContext);
  const handleDeleteClick = () => {
    deleteTask(task.id);
  };
  return (
    <button onClick={handleDeleteClick}>
      <MdDelete />
    </button>
  );
}

export default TaskDelete;
