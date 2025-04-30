import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName);
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
