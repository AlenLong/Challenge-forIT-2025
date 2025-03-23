import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask, getTaskById } from "../api/tasks";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      async function loadTask() {
        const task = await getTaskById(id);
        setTitle(task.title);
        setDescription(task.description);
        setCompleted(task.completed);
      }
      loadTask();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { title, description, completed };
    if (id) {
      await updateTask(id, task);
    } else {
      await createTask(task);
    }
    navigate("/");
  };

const handleCancelClick = (e) => {
    e.preventDefault();
    if (id) {
        navigate(`/task/${id}`);
    } else{
    navigate("/");
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </label>
      <button onClick={handleCancelClick}>Cancel</button>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;

