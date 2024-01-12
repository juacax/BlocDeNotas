//MÓDULO PRINCIPAL DEL PROYECTO


//Import de dependencias y módulos propios
import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';

//Propios
import errorHandler from '../app_bloc_de_notas/src/middleware/errorHandler.js';
import router from '../app_bloc_de_notas/src/routes/index.routes.js'; // Importamos rutas
//import "../app_bloc_de_notas/src/db/initDB.js";

dotenv.config() //Configuración de variables de entorno (.env)
const {PORT} = process.env 
const app = express(); //Iniciamos la aplicación con Express

// Middlewares
app.use(cors()); //Permitimos CORS
app.use(express.json()); //Parseamos body de las solicitudes a JSON

// Rutas
app.use(router);
app.use(errorHandler);//Manejo de errores (último!!)

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });