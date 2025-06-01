import { useState, useContext } from "react";
import TasksContext from "../context/TasksContext.jsx";

function Checkbox({ task }) {
  const [checked, setChecked] = useState(task.isDone || false);
  const { checkTasks } = useContext(TasksContext);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    checkTasks(task.id, newChecked);
  };

  return (
    <input
      className="w-5 h-4 accent-green-500 bg-amber-300"
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    ></input>
  );
}

export default Checkbox;
