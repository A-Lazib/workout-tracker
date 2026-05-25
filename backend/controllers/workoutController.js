let tempDatabase = []

export const postWorkout = (req, res) => {
  const { user, date, exercises, idempotency_key } = req.body;
  const duplicate = tempDatabase.find(w => w.idempotency_key === idempotency_key);

  if (duplicate) {
    return res.status(409).json({error: 'Duplicate request'});
  }

  tempDatabase.push({ user, date, exercises, idempotency_key });
  res.status(201).json({ message: 'Workout logged' });
};

export const getWorkouts = (req, res) => {
  res.json(tempDatabase);
};

export const getUserWorkouts = (req, res) => {
  const { user } = req.params
  const userWorkout = tempDatabase.filter(u => u.user.toLowerCase() === user.toLowerCase())
  res.json(userWorkout);
};