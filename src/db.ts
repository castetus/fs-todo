import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/todo';

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connection established.'));

export default db;