import TasksContext from "../context/TasksContext";
import { useContext } from "react";
import { IoIosClose } from "react-icons/io";

function TaskDelete({ task }) {
  const { deleteTask } = useContext(TasksContext);
  const handleDeleteClick = () => {
    deleteTask(task.id);
  };
  return (
    <button
      aria-label="Delete Task"
      title="Delete"
      className="cursor-pointer"
      onClick={handleDeleteClick}
    >
      <IoIosClose className="w-5 h-5" />
    </button>
  );
}

export default TaskDelete;
