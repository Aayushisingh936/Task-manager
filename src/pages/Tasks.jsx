
import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const { tasks } = useTasks();

  return (
    <main className="tasks-page">
      <section className="tasks-heading">
        <div>
          <span className="section-tag">YOUR PRODUCTIVITY SPACE</span>
          <h1>
            My Daily <span className="accent-text">Tasks.</span>
          </h1>
          <p>
            Organize your priorities, take action, and make
            progress one task at a time.
          </p>
        </div>

        <div className="task-count-card">
          <span className="task-count-icon">▤</span>
          <div>
            <span className="task-count-label">TOTAL TASKS</span>
            <strong>{tasks.length}</strong>
          </div>
        </div>
      </section>

      <section className="task-create-section">
        <div className="task-section-heading">
          <div>
            <h2>Create a task</h2>
            <p>Add something important to your day.</p>
          </div>
          <span className="create-spark">✦</span>
        </div>

        <TaskForm />
      </section>

      <section className="task-results-section">
        <div className="task-results-heading">
          <div>
            <span className="section-tag">YOUR WORKSPACE</span>
            <h2>Your task list</h2>
          </div>
          <span className="task-total-pill">
            {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
          </span>
        </div>

        {tasks.length > 0 ? (
          <div className="task-list">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        ) : (
          <div className="task-empty">
            <div className="empty-icon">✓</div>
            <h3>A fresh start!</h3>
            <p>
              You don't have any tasks yet. Add your first task
              above and start planning your day.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Tasks;

