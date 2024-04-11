import express from "express";
import { getDate } from '../queries/queries.js';
import path from "path";

const __dirname = path.resolve();
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

// Ruta para obtener la fecha
router.get('/date', async(req, res) => {
    const fecha = await getDate();
    res.send(fecha);
});






export default router;