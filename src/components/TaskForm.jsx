
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Study");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTask({
      id: Date.now(),
      title: title.trim(),
      category,
      priority,
      status: "Pending",
    });

    setTitle("");
    setCategory("Study");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Study">Study</option>
        <option value="Coding">Coding</option>
        <option value="Personal">Personal</option>
        <option value="Health">Health</option>
      </select>

      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
