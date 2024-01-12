//MÓDULO DE POOL DE CONEXIONES

//importamos mysql y variables de entorno
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Usuario (viene de .env)
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

// Creamos petición de conexiones
let pool;

// Al llamar a la función getPool, si no existe un pool todavía, crea uno y nos los da. Si ya existe, nos los da automáticamente.
const getPool = async () => {
  // Establecemos captura en caso de error de conexiones
  try {
    if (!pool) {
      console.log("Creando pool de conexiones...");

      // Creamos pool temporal para dar de alta la Base si es que no existe
      const poolTemp = mysql.createPool({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
      });

      await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);
      console.log(`Base de datos ${MYSQL_DB} verificada o creada.`);

      pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        timezone: "Z",
      });
      console.log("Pool de conexiones creado.");
    } else {
      console.log("Usando pool de conexiones existente.");
    }

    // Retornamos el pool de conexiones
    return pool;
  } catch (err) {
    console.error("Error al establecer el pool de conexiones:", err);
  }
};

/*//Usuario (viene de .env)
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

//Creamos petición de conexiones
let pool;


// Al llamar a la función getPool, si no existe un pool todavía, crea uno y nos los da. Si ya existe, nos los da automaticamente.
const getPool = async () => {
  //Establecemos captura en caso de error de conexiones
  try {
    if (!pool) {
      console.log(MYSQL_PASS);
      //Creamos pool temporal para dar de alta la Base si es que no existe
      const poolTemp = mysql.createPool({
        host: MYSQL_HOST, //envio el host para la conexión
        user: MYSQL_USER, //envio el user
        password: MYSQL_PASS, //envio el password
      });
      

      await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

      pool = mysql.createPool({
        connectionLimit: 10, // el limite  de base (modificable)
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        timezone: "Z",
      });
    }

    //retornamos el pool de conexiones
    return pool;
  } catch (err) {
    console.error(err);
  }
};*/

//Exportamos función para usar en otros archivos.(models, node controllers, node categories, main.js...)
export default getPool;