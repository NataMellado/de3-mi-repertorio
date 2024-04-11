import { text } from 'express';
import pool from '../config/db.js';

// Función para obtener la fecha actual
const getDate = async () => {
    try {
        const response = await pool.query('SELECT NOW()');
        return response.rows[0].now;
    } catch (error) {
        console.log(error);
    }
};


// Función para agregar una canción
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

// Función para obtener las canciones
const getSongs = async () => {
    try {
        const response = await pool.query('SELECT * FROM canciones order by id asc');
        return response.rows;
    } catch (error) {
        console.log(error);
    }
};

// Función para eliminar una canción
const deleteSong = async (id) => {
    try {
        const query = {
            text: 'DELETE FROM canciones WHERE id = $1',
            values: [id]
        }
        const response = await pool.query(query);
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Función para editar una canción
const editSong = async (song) => {
    try {
        const query = {
            text: 'UPDATE canciones SET titulo = $2, artista = $3, tono = $4 WHERE id = $1',
            values: song
        }
        const response = await pool.query(query);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export { getDate, addSong, getSongs, deleteSong, editSong};