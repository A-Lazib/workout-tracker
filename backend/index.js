import express from 'express';

const app = express();
const port = 3000;

let tempDatabase = []

app.use(express.json());

app.post('/workout', (req, res) => {
  tempDatabase.push(req.body)
  res.json({received: req.body});
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