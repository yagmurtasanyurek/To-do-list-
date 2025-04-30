import { RiDeleteBin5Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function ShowTask({ task }) {
  return (
    <div>
      <input type="checkbox"></input>
      {task.name}
      <MdDelete />
    </div>
  );
}
export default ShowTask;
