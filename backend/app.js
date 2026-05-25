import express from 'express';
import workoutRoutes from './routes/workouts.js';

const app = express();
app.use(express.json());
app.use('/workout', workoutRoutes);

export default app;