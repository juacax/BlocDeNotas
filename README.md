# app_bloc_de_notas

## DESCRIPCIÓN
El equipo de Rodrigo, Ramón y Cristina hemos desarrollado una aplicación para almacenar notas de texto tipo bloc.


## CARACTERÍSTICAS

- Registro y login de usuarios.
- Creación, modificación y eliminación de notas.
- Creación, modificación y eliminación de categorias.
- Categorización de notas.

## LEYENDA

- ✅ Terminado
- 🔵 En desarrollo 
- 🟡 Futuras actualizaciones
- 🟥 Requiere revisión

## PASOS DEL DESARROLLO ✅

1. Creamos repositorio en github. 

2. Clonamos repositorio de github en una carpeta nueva en el pc (app-notas-texto ejemplo) con el comando `git clone` + `url de repositorio en github`.
   
3. Iniciamos proyecto con el comando `npm init -y`.
   
4. Instalamos dependencias con `npm install` (+ `express, dotenv, mysql2, jsonwebtoken, bcryptjs, joi`).
   
5. Creamos modulo README.md con `touch README.md` (Descripción app).

6. Creamos estructura básica de carpetas (). 

7. Creamos módulo principal `index.js`.

8. Creamos módulo ocultación archivos con `touch .gitignore`.

9. Configuramos variables de entorno en un archivo `.env`. 

10. Creamos archivo de referencia `.env.copy`. (dejamos solo datos de muestra)
 
11. Creamos Pool de conexiones en db/`getpool.js`.

12. Creamos la bd remoto a MySQL en db/`initDB.js`.

13. Creamos middleware de JWT en middleware/`validateAuth.js`.

14. Creamos middleware de manejo de errores en middleware/`errorHandler.js`.

15. Creamos helpers.🟡

16. Creamos schemas para validaciones de datos. 

17. Creamos controlers para programar el funcionamiento de la app de notas.

18. Creamos rutas/Endpoints (para los controllers).

19. Configuramos endpoints en Postman (se hacen de uno en uno, incluiremos el archivo para los compañeros).

20. Incluimos archivo del postman en el repositorio ("blockDeNotas.postan_collection.son").

21. Realizamos pruebas de funcionamiento (una vez tenemos el mensaje de confirmación `Servidor corriendo en el puerto 4000`).


## DEPENDENCIAS ✅

    - express           (Agrega los módulos package.json y package-lock.json)    (El primero!!)
    - dotenv            (Acceder al archivo .env)
    - mysql12           (Manejador la base de datos)
    - jsonwebtoken      (Manejador el usuario)
    - bcrypt            (Encriptador)
    - joi               (Validador exquemas de datos)
    - cors              ()
    
    

## ENDPOINTS ✅

- **USUARIOS**

    - **POST** Registro de usuario
    - **POST** Login de usuario

  
-  **NOTAS**

    - **POST** Crea una nota
    - **PUT** Modifica una nota
    - **DELETE** Elimina una nota


-  **CATEGORIAS**

    - **POST** Crea una categoria
    - **PUT** Modifica una categoria
    - **DELETE** Elimina una categoria   


- **CONSULTAS**

    - **GET** Categorias / busqueda por id (lista total de categorias)
    
    - **GET** Notas / busqueda por detalle
    - **GET** Notas / busqueda por titulo

    /* EN DESARROLLO 🔵
    - **GET** Notas / req.query
    - **GET** Notas / Devuelve notas por tipología
    - **GET** Notas / Devuelve notas por buscar palabra (o tipología)
    - **GET** Notas /Devuelve el detalle de la nota con id = id
    */

## endpoints de stephano 
  
  1) POST /register
  2) POST /login

  1) GET /categorias (devuelve todas con id)

  1) POST /notas (crea la nota)
  2) PUT /notas/:id (modifico la nota)

  3) GET /notas (req.query):
  4) GET /notas?tipologia=2 (devuelve todas las notas de tipologia 2)
  5) GET /notas?search="algo"$tipologia=2 (devuelve todas las notas de tipologia 2 que contienen la palabra algo)
  6) GET /notas/:id (devuelve el dettalle de la nota con id=id req.params)

  
//pasos import de los endpoints
/*
  1) USUARIOS: login y register ✅
  2) CATEGORIA: obtener todas ✅
  3) CATEGORIA: crearla (opcional)✅
  4) CATEGORIA: modificarla (opcional)✅
  5) CATEGORIA: eliminarla (opcional)✅
  6) NOTA: crearla ✅
  7) NOTA: modificarla ✅
  8) NOTA: eliminarla (opcional)✅
  9) NOTA: obtener detalle ✅
  10) NOTA: obtener título ✅
  11) BUSQUEDA NOTAS:(4) ? 🔵
*/
   
 //FALTA REVISAR: 🟥
  - Podriamos incluir en distintos módulos el `errores.helpers`, para que convinados con `errorHandler.js`(errores genéricos filtro final), filtremos también errores + especificos.🟡
  - Podriamos incluir en distintos módulos el `validateauth.js`, para que solo los usuarios logeandos puedan operar. 🟡
  - Autenticación y Autorización: Podriamos definir roles y permisos para tipos de usuario (para gestionar categorias por ejemplo). 🟡
  - Peticiones postman (estan casi todas) 🟥
  - Comprobaciones de si funciona todo 🟥



## Uso

Para ejecutar el proyecto:

- En la terminal / bash usar comando `node index.js`.


# Comandos útiles

- Para revisar dependencias instaladas `npm list`.
- Para revisar dependencias instaladas de primer nivel `npm list --depth=0`. 
- Para revisar dependencias en busca de vulnerabilidades conocidas utiliza `npm audit`.


