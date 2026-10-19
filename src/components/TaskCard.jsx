
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>Category: {task.category}</p>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>

      <button type="button" onClick={() => toggleTask(task.id)}>
        {task.status === "Completed" ? "Mark Pending" : "Complete"}
      </button>

      <button type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
