import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, deleteTask } from "../api/tasks";

function TaskItem() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    async function loadTask() {
      const taskData = await getTaskById(id);
      setTask(taskData);
    }
    loadTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  const handleEditClick = () => {
    navigate(`/task/edit/${id}`);
  };

  const handleDeleteClick = async (e) => {
    if (id) {
      await deleteTask(id);
    }
    navigate("/");
  };

  const handleReturnClick = ()  => {
    navigate("/");
  };

  return (
    <div className="task-form">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Completed: {task.completed ? "Yes" : "No"}</p>

      
      <button onClick={handleReturnClick}>Back</button>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default TaskItem;
