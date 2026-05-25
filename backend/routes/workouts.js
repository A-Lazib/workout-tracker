import { Router } from "express";
import { postWorkout, getWorkouts, getUserWorkouts } from '../controllers/workoutController.js';

const router = Router();

router.post('/', postWorkout);

router.get('/', getWorkouts);

router.get('/:user', getUserWorkouts);

export default router;