import express from "express";
import { getDate, addSong, getSongs, deleteSong, editSong } from '../queries/queries.js';
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
    res.redirect('/?message=Canción%20agregada%20exitosamente');
});




// Ruta para obtener las canciones
router.get('/getSongs', async(req, res) => {
    const songs = await getSongs();
    res.json(songs);
});




// Ruta para editar una canción
router.put('/editSong', async(req, res) => {
    const song = Object.values(req.body);
    await editSong(song);
    res.send('Canción editada exitosamente');
});




// Ruta para eliminar una canción
router.delete('/deleteSong/:id', async(req, res) => {
    const id = req.params.id;
    await deleteSong(id);
    res.send('Canción eliminada exitosamente');
});




export default router;