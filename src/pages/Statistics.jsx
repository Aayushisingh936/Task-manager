import { useMemo } from "react";
import { useTasks } from "../context/TaskContext";

function Statistics(){
    const { tasks } = useTasks();

    const Statistics = useMemo(()=> {
        const total = tasks.length;

        const Completed = tasks.filter(
            (task) => task.status === "Completed"
        ).length;

        const pending = tasks.filter(
            (task) => task.status === "Pending"
        ).length;

        const highPriority = tasks.filter(
            (task) => task.Priority ===  "High"
        ).length;

        return {
            total,
            completed,
            pending,
            highPriority,
        };
    }, [tasks]);

    return (
        <div>
            <h1>Task Statistics</h1>

            <p>Total Tasks: {Statistics.total}</p>
            <p>completed: {Statistics.completed}</p>
            <p>Pending: {Statistics.pending}</p>
            <p>High Priority: {Statistics.highPriority}</p>
        </div>
    );
}

export default Statistics;
