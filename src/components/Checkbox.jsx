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
    <input type="checkbox" checked={checked} onChange={handleChange}></input>
  );
}

export default Checkbox;
