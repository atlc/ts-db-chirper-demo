import * as dotenv from 'dotenv';

dotenv.config();

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    connectionLimit: Number(process.env.DB_CONN_LIMIT)
}