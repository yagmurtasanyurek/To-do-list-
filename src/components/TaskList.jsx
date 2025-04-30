import ShowTask from "./ShowTask";

function TaskList({ tasks }) {
  const renderedTasks = tasks.map((task, index) => {
    return <ShowTask task={task} key={task.id} />;
  });
  return <div>{renderedTasks}</div>;
}
export default TaskList;
