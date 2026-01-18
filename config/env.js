import {config } from 'dotenv';
import { resolve } from 'path';
config({
    path: resolve(process.cwd(), 'env.development.local'),
});


export const { PORT, NODE_ENV , DB_URI, JWT_SECRET , JWT_EXPIRES_IN, QSTASH_TOKEN, QSTASH_URL, EMAIL_PASSWORD, SERVER_URL  } = process.env;