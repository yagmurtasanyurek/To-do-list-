import ShowTask from "./ShowTask";

function TaskList({ tasks, onDeleteTask }) {
  const renderedTasks = tasks.map((task, index) => {
    return <ShowTask task={task} key={task.id} onDeleteTask={onDeleteTask} />;
  });
  return <div>{renderedTasks}</div>;
}
export default TaskList;
