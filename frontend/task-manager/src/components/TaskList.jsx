import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../api/tasks"

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const taskList = await getTasks();
      setTasks(taskList);
    }
    loadTasks();
  }, []);

  return (
    <div className="task-form">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/task/new">Create New Task</Link>
    </div>
  );
}

export default TaskList;
