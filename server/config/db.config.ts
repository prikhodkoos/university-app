import dotenv from 'dotenv';

dotenv.config();

export const databaseUrl = process.env.DATABASE_URL;
export const database = process.env.DB_NAME;
export const username = process.env.DB_USERNAME;
export const password = process.env.DB_PASSWORD;
export const host = process.env.DB_HOST;
export const port = process.env.DB_PORT;
export const logging = true;
