import { useState, useContext } from "react";
import TasksContext from "../context/TasksContext";

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
    <form
      onSubmit={handleSubmit}
      className="flex w-full  bg-neutral-100 mb-8 rounded-xl"
    >
      <input
        className=" min-h-8 p-3 grow rounded-xl outline-red-300 focus:outline-2 "
        value={taskName}
        onChange={handleChange}
      />
      <button className=" rounded-r-sm cursor-pointer min-h-8 grow-0 p-3">
        Add
      </button>
    </form>
  );
}

export default TaskInput;
