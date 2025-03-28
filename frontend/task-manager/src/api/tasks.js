const API_URL = "http://localhost:5000/api/tasks";

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getTaskById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};

export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
};

export const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      params: id,
    });
  };
