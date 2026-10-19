import { useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskDetails(){
    const { id } = useParams();
    const { tasks } = useTasks();

    const task = tasks.find((task) => task.id === Number(id));

    if (!task) {
        return <h2>Task not found</h2>;
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>Category: {task.category}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
        </div>
    );
}
export default TaskDetails;
