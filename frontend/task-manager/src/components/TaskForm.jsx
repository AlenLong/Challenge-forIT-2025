import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createTask, updateTask, getTasks } from "../api/tasks";

function TaskForm() {
    const [task, setTask] = useState({ title: "", description: "", completed: false });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            loadTask();
        }
    }, [id]);

    const loadTask = async () => {
        const tasks = await getTasks();
        const foundTask = tasks.find((t) => t.id === parseInt(id));
        if (foundTask) setTask(foundTask);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTask({ ...task, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await updateTask(id, task);
        } else {
            await createTask(task);
        }
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={task.title} onChange={handleChange} required />
            <textarea name="description" value={task.description} onChange={handleChange} />
            <label>
                Completado:
                <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} />
            </label>
            <button type="submit">{id ? "Actualizar" : "Crear"} Tarea</button>
        </form>
    );
}

export default TaskForm;
