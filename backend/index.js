import express from 'express';

const app = express();
const port = 3000;

let tempDatabase = []

app.use(express.json());

app.post('/workout', (req, res) => {
  const { user, date, exercises, idempotency_key } = req.body;
  const duplicate = tempDatabase.find(w => w.idempotency_key === idempotency_key);

  if (duplicate) {
    return res.status(409).json({error: 'Duplicate request'});
  }

  tempDatabase.push({ user, date, exercises, idempotency_key });
  res.status(201).json({ message: 'Workout logged' });
});


app.get('/', (req, res) => {
  res.json({message: 'Hello World!'});
});


app.get('/workout', (req, res) => {
  res.json(tempDatabase);
});


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});