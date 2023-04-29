import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
import taskRouter from '@routes/tasks.routes';

const app = express();

app.use(bodyParser.json());

app.use('/', taskRouter);

// mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// const router = express.Router();

// router.get('/hello', (req, res) => {
//   res.send('Hello, world!');
// });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

