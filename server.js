import express from "express";
import cors from 'cors'; // Importamos cors para permitir peticiones desde cualquier origen 
import router from "./routes/routes.js";
process.loadEnvFile(); // Esto es para cargar las variables de entorno desde un archivo .env

const app = express();
const PORT = process.env.PORT || 3008;

app.use(cors()); // Para permitir peticiones desde cualquier origen 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para poder recibir datos de formularios en req.body (POST) 
app.use(express.static("public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

