if (process.env.NODE_ENV !== 'production') require('dotenv').config();

import express from 'express';
import songRoutes from './routes/songs';

const app = express();

app.use('/songs', songRoutes);

export default app;
