import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

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
