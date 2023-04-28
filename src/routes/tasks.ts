import express, { Router } from 'express';
import TaskController from '@controllers/tasks.controller';

const router = express.Router();

router.get('/lists', TaskController.getAllLists);

export default router;