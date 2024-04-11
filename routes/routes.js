import express from "express";
import {} from '../queries/queries.js';
import path from "path";

const __dirname = path.resolve();
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

export default router;