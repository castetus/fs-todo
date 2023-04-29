import { Schema, model } from 'mongoose';

const listSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  estimate: {
    type: Date,
  },
});

export default model('Task', listSchema);
