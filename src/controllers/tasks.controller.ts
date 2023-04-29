import { IList, ITask, IResponse } from "../types";

const getAllLists = (): IList[] => {
  return [];
};

const getListById = (id: string): IList => {
  const list = {} as IList;
  return list;
};

const createNewList = (list: string): string => {
  try {
    const newList = JSON.parse(list) as IList;
    return 'success';
  } catch (error) {
    console.log(error);
    return 'not success';
  }
};

const createNewTask = (task: string): string => {
  try {
    const newTask = JSON.parse(task) as ITask;
    return 'success';
  } catch (error) {
    console.log(error);
    return 'not success';
  }
};

export default {
  getAllLists,
  getListById,
  createNewList,
  createNewTask,
};