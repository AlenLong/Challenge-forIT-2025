/* require("dotenv").config();
const express = require("express");
 */

import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();


const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para procesar JSON

// Almacenamiento temporal en memoria
let tasks = [];
let idCounter = 1;

// Obtener todas las tareas
app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Crear una nueva tarea
app.post("/api/tasks", (req, res) => {
    const { title, description, completed } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTask = {
        id: idCounter++,
        title: title.trim(),
        description: description?.trim() || "",
        completed: completed ?? false,
        createdAt: new Date(),
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.put("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const task = tasks.find((t) => t.id === parseInt(id));

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "Title is required" });
    }

    task.title = title.trim();
    if (description !== undefined) task.description = description.trim();
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});
// Eliminar una tarea
app.delete("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((t) => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.status(204).send();
});

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
