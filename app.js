import express from 'express';

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((error, req, res) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080);
