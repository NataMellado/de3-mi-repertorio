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

export { getDate };