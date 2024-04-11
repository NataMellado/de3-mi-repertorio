import pg from 'pg';
const { Pool } = pg;
process.loadEnvFile(); // Esto es para cargar las variables de entorno desde un archivo .env 

const { DB_USER, DB_PASS, DB_HOST, DB_DATABASE } = process.env;

const config = {
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    database: DB_DATABASE,
    allowExitOnIddle: true
};

const pool = new Pool(config);

export default pool;