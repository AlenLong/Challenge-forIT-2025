/* require("dotenv").config();
const express = require("express");
 */

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

//const cors = cors;

dotenv.config();
const app = express();


const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type'],  
}));

app.use(express.json()); 


let tasks = [];
let idCounter = 1;


app.get("/api/tasks", (req, res) => {
    res.json(tasks);
});

// Ruta para obtener una tarea por ID
app.get("/api/tasks/:id", (req, res) => {
   
    const taskId = parseInt(req.params.id);

    // Buscar la tarea correspondiente
    const task = tasks.find(t => t.id === taskId); 

    if (task) {
        res.json(task); 
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});



// Crear
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

// editar
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
// Eliminar
app.delete("/api/tasks/:id", (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((t) => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.status(204).send();
});

// errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
