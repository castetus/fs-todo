import express, { Request, Response } from 'express';
import TaskController from '@controllers/tasks.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const lists = await TaskController.getAllLists();
  // const lists = [];
  res.send(lists);
});

// router.get('/list/:id', (req, res) => {
//   const response = TaskController.getListById(req.params.id);
//   res.send(response);
// });

// router.post('/newlist', (req, res) => {
//   const response = TaskController.createNewList(req.body);
//   res.send(response);
// });

// router.post('/newtask', (req, res) => {
//   const response = TaskController.createNewTask(req.body);
//   res.send(response);
// });

// router.put('/editlist/:id', (req, res) => {

// });

export default router;