function TaskFilter({ status, category, priority, onChange }) {
    return (
        <div>
            <select
              value={status}
              onChange={(e) => onChange("status", e.target.value)}
            >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>

            <select
              value={category}
              onChanged={(e) => onChange("category", e.target.value)}
            
            >
                <option value="All">All Categories</option>
                <option value="Study">Study</option>
                <option value="Coding">Coding</option>
                <option value="Personal">Personal</option>
            </select>

            <select
              value={priority}
              onChange={(e)=> onChange("priority", e.target.value)}
            >
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    );
}
export default TaskFilter;