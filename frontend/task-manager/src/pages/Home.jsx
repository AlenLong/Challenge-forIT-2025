import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

function Home() {
    return (
        <div>
            <h1>Gestor de Tareas</h1>
            <Link to="/task/new">Agregar Nueva Tarea</Link>
            <TaskList />
        </div>
    );
}

export default Home;
