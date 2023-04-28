import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

