import { text } from 'express';
import pool from '../config/db.js';

const getDate = async () => {
    try {
        const response = await pool.query('SELECT NOW()');
        return response.rows[0].now;
    } catch (error) {
        console.log(error);
    }
};

const addSong = async (song) => {
    try {
        const query = {
            text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)',
            values: song
        }
        const response = await pool.query(query);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { getDate, addSong};