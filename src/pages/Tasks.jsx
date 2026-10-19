import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks } = useTasks();

  return (
    <main className="tasks-page">
      <h1>My Daily Tasks</h1>
      <p>Organize your day, one task at a time.</p>

      <TaskForm />

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks yet. Add your first task above!</p>
        )}
      </div>
    </main>
  );
}

export default Tasks;
