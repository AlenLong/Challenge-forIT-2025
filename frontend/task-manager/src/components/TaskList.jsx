import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/tasks";
import TaskItem from "./TaskItem";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default TaskList;
