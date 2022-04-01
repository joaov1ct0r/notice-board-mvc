import 'dotenv/config';

import express from 'express';

import userRoutes from './routes/userRoutes.js';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use('/api', express.json(), userRoutes);

app.use('/', express.static(path.join(__dirname, 'view')));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
