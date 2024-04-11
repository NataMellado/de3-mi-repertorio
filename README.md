# Desafío - Mi repertorio

En este desafío se validan los conocimientos sobre Levantar un servidor con conexión a PostgreSQL, Insertar registros, Consultar registros, Actualizar registros y Eliminar registros.


## Screenshots

<img src="./public/img/desktop.png" width="100%" >

<img src="./public/img//mobile.png" width="60%" >

## Rutas Disponibles

- POST /addSong: Inserta una nueva canción en la tabla de canciones.
- GET /getSongs: Obtiene todas las canciones de la tabla y las devuelve en formato JSON.
- PUT /editSongs: Actualiza la información de una canción existente en la tabla.
- DELETE /deleteSongs: Elimina una canción de la base de datos según su ID.

## Dependencias Utilizadas

- express: Framework web para Node.js.
- pg: Cliente PostgreSQL para Node.js.
- cors: Middleware de Express para habilitar el intercambio de recursos entre diferentes orígenes.
- nodemon: Herramienta para reiniciar automáticamente el servidor al detectar cambios en los archivos.

## Instalación y Uso

1. Descarga el repositorio.
2. Instala las dependencias usando `npm install cors pg express nodemon`.
3. Crea una base de datos y añade la siguiente tabla:

```
CREATE TABLE canciones (
	id SERIAL primary key, 
	titulo VARCHAR(50), 
	artista VARCHAR(50), 
	tono VARCHAR(10)
); 
```

3. Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno (reemplaza los valores correspondientes):

```
DB_USER = tu_usuario_de_base_de_datos
DB_PASS = contraseña_de_base_de_datos
DB_HOST = host_de_base_de_datos
DB_DATABASE = nombre_de_la_base_de_datos
```
4. Ejecuta el servidor con npm run dev. 