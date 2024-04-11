import express from "express";
import { getDate, addSong, getSongs } from '../queries/queries.js';
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

// Ruta para agregar una canción
router.post('/addSong', async(req, res) => {
    const song = Object.values(req.body);
    await addSong(song);
    res.sendFile(__dirname + '/views/index.html');
});

// Ruta para obtener las canciones
router.get('/getSongs', async(req, res) => {
    const songs = await getSongs();
    res.json(songs);
});






export default router;