export interface IUser {
  id: number,
  name: string,
};

export interface ITask {
  id: number,
  name: string,
  description?: string,
  date: number,
  created: IUser,
  done: boolean,
};

export interface IList {
  id: number,
  name: string,
  date: number,
  estimate?: string,
  tasks: ITask[],
};