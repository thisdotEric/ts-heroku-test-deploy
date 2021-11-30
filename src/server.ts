if (process.env.NODE_ENV !== 'production') require('dotenv').config();

import express, { Response } from 'express';
import songRoutes from './routes/songs';

const app = express();

app.get('/', (_, res: Response) => {
  res.status(200).send('Ok');
});
app.use('/songs', songRoutes);

export default app;
