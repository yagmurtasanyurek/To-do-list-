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
      className="relative flex w-full  bg-amber-50 mb-8 rounded-xl"
    >
      <input
        className=" min-h-15 px-4 grow rounded-xl focus:outline-none "
        value={taskName}
        name="userTask"
        placeholder="Write out your plans"
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        aria-label="Add Task"
        className="absolute right-0 top-1.5 rounded-r-xl cursor-pointer min-h-8 grow-0 p-3 bg-amber-50"
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
