import { Link } from "react-router-dom";

function TaskItem({ task, onDelete }) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Completado: {task.completed ? "Si" : "No"}</p>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
            <Link to={`/task/edit/${task.id}`}>Editar</Link>
        </div>
    );
}

export default TaskItem;
