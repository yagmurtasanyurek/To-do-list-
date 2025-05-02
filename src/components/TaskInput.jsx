import { useState, useContext } from "react";
import TasksContext from "../context/tasks";

function TaskInput() {
  const [taskName, setTaskName] = useState("");
  const { createTask } = useContext(TasksContext);

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(taskName);
    setTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={taskName} onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskInput;
