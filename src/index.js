import express from 'express';
import { mult } from './utils/mult';

const app = express();

app.get('/', (req, res) => {
  const result = mult(2, 5);
  return res.json({ message: result });
});

app.listen(3333, () => console.log('ok'));
