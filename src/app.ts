if (process.env.NODE_ENV !== 'production') 
	require('dotenv').config();

import express from 'express';
import songRoutes from "./routes/songs"

const app = express();

app.use('/songs', songRoutes);

const PORT = process.env.PORT || 3003;
export default app.listen(PORT, () => {
	console.log(`Test server running in port ${PORT}`);
})
