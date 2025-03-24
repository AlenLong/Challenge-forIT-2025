# Challenge-forIT-2025




## Guía de Usuario: Ejecutar el Proyecto Backend y Frontend

Esta guía te ayudará a ejecutar tanto el servidor de backend como el de frontend en tu máquina local.

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (recomendado: versión LTS)
- [npm](https://www.npmjs.com/), que se instala automáticamente con Node.js

Si ya tienes estos programas instalados, puedes continuar con los siguientes pasos.

---

## Configuración del Backend

1. **Accede al directorio del backend:**

   Desde consola navega a la carpeta donde tienes el código del backend con el siguiente comando.

   cd backend

---

2. **Instalar las dependencias:**

Una vez dentro del directorio del backend, desde consola instala las dependencias necesarias utilizando npm:

npm install

---

3. **Configurar el archivo .env:**

Crear un archivo .env en el directorio raíz del backend y agrega la línea:

PORT=5000

para establecer el puerto del servidor

---

4. **Ejecutar el servidor del Backend**

Para ejecutar el servidor de backend, utiliza el siguiente comando en consola:

node server.js

---

5. **Accede al directorio del frontend:**

Navega a la carpeta donde tienes el código del frontend/task-manager, con los siguientes comandos.


cd frontend
cd task-manager

---

6. **Instalar las dependencias:**

Al igual que en el backend, instala las dependencias necesarias utilizando npm en consola:


npm i

7. **Ejecutar el servidor del frontend:**

Para iniciar el servidor de frontend, ejecuta el siguiente comando:

npm run dev

======

### Información adicional


**probar los endpoints:**

Obtener todas las tareas
curl -X GET http://localhost:5000/api/tasks

Crear una tarea
curl -X POST http://localhost:5000/api/tasks \
     -H "Content-Type: application/json" \
     -d '{"title": "Aprender Node.js", "description": "Revisar documentación", "completed": false}'


Actualizar una tarea (id = 1)
curl -X PUT http://localhost:5000/api/tasks/1 \
     -H "Content-Type: application/json" \
     -d '{"title": "Aprender Express", "description": "Revisar más ejemplos", "completed": true}'


Eliminar una tarea (id = 1)
curl -X DELETE http://localhost:5000/api/tasks/1


---

### capturas de pantalla

#### Create Task
![Create Task](https://github.com/AlenLong/Challenge-forIT-2025/blob/main/frontend/task-manager/public/img/Create%20Task.png?raw=true)


#### Task Item
![Task Item](https://github.com/AlenLong/Challenge-forIT-2025/blob/main/frontend/task-manager/public/img/Task%20item.png?raw=true)


#### Edit Task
![Edit Task](https://github.com/AlenLong/Challenge-forIT-2025/blob/main/frontend/task-manager/public/img/Task%20edit.png?raw=true)


#### Task Saved
![Task Saved](https://github.com/AlenLong/Challenge-forIT-2025/blob/main/frontend/task-manager/public/img/Task%20saved.png?raw=true)

